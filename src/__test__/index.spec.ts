import { skipOn } from '@kamiazya/jest-dynamic';
import '../index';

const skipOnWindows = skipOn('win32');

describe('public api', () => {
  const dot = 'digraph g { a -> b; }';
  // Skip test on windows
  // NOTE: Not support output json format on Graphviz windows statable now.
  skipOnWindows.test('toMatchDotJsonSnapshot', () => {
    // eslint-disable-next-line jest/no-standalone-expect
    expect(dot).toMatchDotJsonSnapshot();
  });

  test('toBeValidDotAndMatchSnapshot', () => {
    expect(dot).toBeValidDotAndMatchSnapshot();
  });
  test('toBeValidDot', () => {
    expect(dot).toBeValidDot();
  });
});
