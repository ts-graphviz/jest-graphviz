import { toMatchSnapshot } from 'jest-snapshot';
import { isValidDot } from './lib/is-valid-dot';
import { wrap } from './serializer';

export function toBeValidDotAndMatchSnapshotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  const result = isValidDot(dot);
  if (result.pass) {
    return toMatchSnapshot.call(this, wrap(dot));
  }
  return result;
}

expect.extend({ toBeValidDotAndMatchSnapshot: toBeValidDotAndMatchSnapshotMatcher });
