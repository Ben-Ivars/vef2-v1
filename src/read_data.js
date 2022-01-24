import { writeFile, mkdir, readFile, readdir, stat } from 'fs/promises';

const DATA_DIR = './data';

async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

async function main() {
  console.log(direxists(DATA_DIR))
}

main().catch((err) => console.error(err));
