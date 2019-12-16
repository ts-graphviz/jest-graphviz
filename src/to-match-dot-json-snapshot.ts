import { toMatchSnapshot } from 'jest-snapshot';
import { jsonStdin } from './lib/dot-adapter';

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
