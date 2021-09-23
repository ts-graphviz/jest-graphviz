import { toMatchSnapshot } from 'jest-snapshot';
import { dotJsonStdin } from './lib/dot-adapter';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function toMatchDotJsonSnapshotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  try {
    return toMatchSnapshot.call(this, dotJsonStdin(dot));
  } catch (error) {
    return {
      pass: false,
      message: () => `expected value to be valid dot format.\n${error}`,
    };
  }
}

expect.extend({ toMatchDotJsonSnapshot: toMatchDotJsonSnapshotMatcher });
