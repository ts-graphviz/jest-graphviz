import { skipOn } from '@kamiazya/jest-dynamic';
import '../to-match-dot-json-snapshot';

const skipOnWindows = skipOn('win32');

// Skip test on windows
// NOTE: Not support output json format on Graphviz windows statable now.
skipOnWindows.describe('toMatchDotJsonSnapshot test', () => {
  test('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toMatchDotJsonSnapshot();
  });
});
