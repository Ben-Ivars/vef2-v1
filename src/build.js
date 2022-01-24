import { writeFile, mkdir, readFile, readdir, stat } from 'fs/promises';

const DATA_DIR = './blog';
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
  console.log('virkar')
}


main().catch((err) => console.error(err));