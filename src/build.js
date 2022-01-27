import { writeFile, mkdir, readdir, stat } from 'fs/promises';
import { join } from 'path';

import { parse } from './parser.js';
import { read_txt } from './read_data.js';
import { calculateAnalysis } from './calc.js'
import { makeIndex } from './make_html.js';



const DATA_DIR = './data';
const OUTPUT_DIR = './dist';
const filename = './data/3.txt'

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
  // const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }
  const index = makeIndex();
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });


  // const numAnlys = [];

  // for (const file of files) {
  //   const path = join(DATA_DIR, file);
  //   const info = await stat(path);

  //   if (info.isDirectory()) {
  //     // eslint-disable-next-line no-continue
  //     continue;
  //   }


  // }
  // console.log(file.split('.')[0])

  // const a = await read_txt('./data/1.txt');
  // const b = await parse(a);
  // const c = await calculateAnalysis(b);
  // console.log(c)

}

main().catch((err) => console.error(err));
