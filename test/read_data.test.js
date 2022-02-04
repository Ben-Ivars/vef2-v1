import { describe, expect, it } from '@jest/globals';
import { join } from 'path';
import { readTxt } from '../src/read_data.js';

const TESTDIR = './test/testFiles';
describe('.txt file reader', () => {
  it('reads regular file', async () => {
    const data = await readTxt(join(TESTDIR, 'normal.txt'));
    expect(data).toEqual(`1
2
3
4
5
`);
  });
  it('reads an empty file', async () => {
    const data = await readTxt(join(TESTDIR, 'empty.txt'));
    expect(data).toEqual('');
  });

  it('throws if file not found', async () => {
    await expect(
      readTxt(join(TESTDIR, 'doesntexist.txt'))
    ).rejects.toThrow();
  });
});
