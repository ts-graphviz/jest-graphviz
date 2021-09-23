export { toBeValidDotMatcher } from './to-be-valid-dot';
export { toBeValidDotAndMatchSnapshotMatcher } from './to-be-valid-dot-and-match-snapshot';
export { toMatchDotJsonSnapshotMatcher } from './to-match-dot-json-snapshot';

declare global {
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Expect {
      toMatchDotJsonSnapshot<T>(): JestMatchers<T>;
      /**
       * @description
       * It depends on the JSON output format added in Graphviz 2.40.0.
       */
      toBeValidDotAndMatchSnapshot<T>(): JestMatchers<T>;
      toBeValidDot<T>(): JestMatchers<T>;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T> {
      /**
       * @description
       * It depends on the JSON output format added in Graphviz 2.40.0.
       */
      toMatchDotJsonSnapshot(): R;
      toBeValidDotAndMatchSnapshot(): R;
      toBeValidDot(): R;
    }
  }
}
