export const range2 = (from: number, to: number): number[] =>
  from < to ? [from, ...range2(from + 1, to)]: [];