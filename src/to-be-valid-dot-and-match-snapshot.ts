import { toMatchSnapshot } from 'jest-snapshot';
import { isValidDot } from './lib/is-valid-dot';

declare global {
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Expect {
      toBeValidDotAndMatchSnapshot<T>(): JestMatchers<T>;
    }
    // tslint:disable-next-line: interface-name
    interface Matchers<R, T> {
      toBeValidDotAndMatchSnapshot(): R;
    }
  }
}

export function toBeValidDotAndMatchSnapshotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  return isValidDot(dot) && toMatchSnapshot.call(this, dot);
}

expect.extend({ toBeValidDotAndMatchSnapshot: toBeValidDotAndMatchSnapshotMatcher });
