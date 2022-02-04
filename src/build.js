import { writeFile, mkdir, readdir, stat } from 'fs/promises';
import { join } from 'path';

import { parse } from './parser.js';
import { readTxt } from './read_data.js';
import { calculateAnalysis } from './calc.js'
import { entryTemplate, makeIndex, makeHTML, rawHelper } from './make_html.js';



const DATA_DIR = './data';
const OUTPUT_DIR = './dist';
/**
 * Checks if a directory exists
 * @param {*} dir Directory to check
 * @returns Boolean promise wether dir exists
 */
async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

async function main() {
  const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  // console.log(files)
  const numAnlys = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);
    const info = await stat(path);

    if (info.isDirectory()) {
      // eslint-disable-next-line no-continue
      continue;
    }
    const str = await readTxt(path);
    const parsed = await parse(str);
    const calced = await calculateAnalysis(parsed)
    const slug = file.split('.')[0];
    const filename = join(OUTPUT_DIR, `dataset_${slug}.html`);

    // html stuff
    const data10list = rawHelper(parsed)
    const html = makeHTML(calced, slug, data10list)
    const title = 'Dataset '.concat(slug)
    const numEntry = entryTemplate(title, html, false)

    if (filename) {
      await writeFile(filename, numEntry, { flag: 'w+' });
      numAnlys.push(slug);
    } else {
      console.warn('Faulty filename', path);
    }
  }
  const index = entryTemplate('Gagnavinnsla', makeIndex(numAnlys));
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
}

main().catch((err) => console.error(err));
