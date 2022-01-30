import { describe, expect, it } from '@jest/globals';
import { read_txt } from '../src/read_data.js';


describe('Read txt file', () => {
  it('Reads a txt file and returns a string of contents', () => {
    const input = './test/test.txt'
    const read = read_txt(input)
    expect(read).toBe('1 2 3 4 5');
  });
});
