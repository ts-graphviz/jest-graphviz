export { toBeValidDotMatcher } from './to-be-valid-dot';
export { toBeValidDotAndMatchSnapshotMatcher } from './to-be-valid-dot-and-match-snapshot';
export { toMatchDotJsonSnapshotMatcher } from './to-match-dot-json-snapshot';

declare global {
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Expect {
      toMatchDotJsonSnapshot<T>(): JestMatchers<T>;
      toBeValidDotAndMatchSnapshot<T>(): JestMatchers<T>;
      toBeValidDot<T>(): JestMatchers<T>;
    }
    // tslint:disable-next-line: interface-name
    interface Matchers<R, T> {
      toMatchDotJsonSnapshot(): R;
      toBeValidDotAndMatchSnapshot(): R;
      toBeValidDot(): R;
    }
  }
}
