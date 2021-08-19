/* eslint-disable linebreak-style */
import { expect } from '@jest/globals';
import demo from '../app';

test('demo test', () => {
  expect(demo('someStr')).toBe('someStr');
});
