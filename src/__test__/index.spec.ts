import '../index';
describe('public api', () => {
  const runOnWindows = process.platform === 'win32';

  const dot = 'digraph g { a -> b; }';

  // Skip test on windows
  // NOTE: Not support output json format on Graphviz windows statable now.
  (runOnWindows ? test.skip : test)('toMatchDotJsonSnapshot', () => {
    expect(dot).toMatchDotJsonSnapshot();
  });

  test('toBeValidDotAndMatchSnapshot', () => {
    expect(dot).toBeValidDotAndMatchSnapshot();
  });
  test('toBeValidDot', () => {
    expect(dot).toBeValidDot();
  });
});
