import { readFile, stat } from 'fs/promises';


// export function removeComments(string) {
//   //Takes a string of code, not an actual function.
//   return string.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();//Strip comments
// }

/**
 *
 * @param {*} path is an path to input file to be read
 * @returns contents (data) as a string
 */
export async function read_txt(path) {
  const info = await stat(path);
  if (!info.isFile()) {
    return console.error('not a file');
  }
  const data = await readFile(path, 'utf-8');

  return data;
}
