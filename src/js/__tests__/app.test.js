import { expect } from '@jest/globals';
import demo from '../app';

test('demo test', () => {
  const value = demo('someStr');
  expect(demo('someStr')).toBe('someStr');
});
