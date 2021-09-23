import { isValidDot } from './lib/is-valid-dot';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function toBeValidDotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  return isValidDot(dot);
}

expect.extend({ toBeValidDot: toBeValidDotMatcher });
