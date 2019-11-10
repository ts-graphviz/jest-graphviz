import { isValidDot } from './lib/is-valid-dot';

declare global {
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Expect {
      toBeValidDot<T>(): JestMatchers<T>;
    }
    // tslint:disable-next-line: interface-name
    interface Matchers<R, T> {
      toBeValidDot(): R;
    }
  }
}

export function toBeValidDotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  return isValidDot(dot);
}

expect.extend({ toBeValidDot: toBeValidDotMatcher });
