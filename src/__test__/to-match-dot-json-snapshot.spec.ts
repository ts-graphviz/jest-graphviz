import '../to-match-dot-json-snapshot';

const runOnWindows = process.platform === 'win32';
// Skip test on windows
// NOTE: Not support output json format on Graphviz windows statable now.
(runOnWindows ? describe.skip : describe)('toMatchDotJsonSnapshot test', () => {
  test('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toMatchDotJsonSnapshot();
  });
});
