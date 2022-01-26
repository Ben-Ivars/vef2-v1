import { writeFile, mkdir, readFile, readdir, stat } from 'fs/promises';
import { parse } from './parser.js';
import { read_txt } from './read_data.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';
const filename = './data/8.txt'

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
  console.log('virkar')

  console.log(await direxists(DATA_DIR))
  const test = await read_txt(filename)
  // console.log(await read_txt(filename))
  console.log(test)
  console.log('parser>')
  console.log(await parse(test))

}


main().catch((err) => console.error(err));
