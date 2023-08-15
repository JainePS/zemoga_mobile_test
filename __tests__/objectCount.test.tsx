/**
 * @format
 */

import 'react-native';
import {it, expect} from '@jest/globals';
import objectCount from '../src/utils/objectCount';

let arr = [{id: 1}, {id: 2}, {id: 3}];

it('Number of object elements in an array of object', () => {
  expect(objectCount(arr)).toBe(3);
});
