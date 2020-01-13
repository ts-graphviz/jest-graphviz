import { isValidDot } from './lib/is-valid-dot';

export function toBeValidDotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  return isValidDot(dot);
}

expect.extend({ toBeValidDot: toBeValidDotMatcher });
