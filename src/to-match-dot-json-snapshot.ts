import { toMatchSnapshot } from 'jest-snapshot';
import { jsonStdin } from './lib/dot-adapter';

declare global {
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Expect {
      toMatchDotJsonSnapshot<T>(): JestMatchers<T>;
    }
    // tslint:disable-next-line: interface-name
    interface Matchers<R, T> {
      toMatchDotJsonSnapshot(): R;
    }
  }
}

export function toMatchDotJsonSnapshotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  try {
    return toMatchSnapshot.call(this, jsonStdin(dot));
  } catch (error) {
    return {
      pass: false,
      message: () => `expected value to be valid dot format.\n${error}`,
    };
  }
}

expect.extend({ toMatchDotJsonSnapshot: toMatchDotJsonSnapshotMatcher });
