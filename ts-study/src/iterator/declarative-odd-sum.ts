import { range } from "./range";
import { fold } from './fold';
import { filter } from './filter';

let numbers: number[] = range(1, 100 + 1);

const isOdd = (n: number): boolean => n % 2 !== 0;

