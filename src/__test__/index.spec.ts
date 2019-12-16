import '../index';
describe('public api', () => {
  const dot = 'digraph g { a -> b; }';
  test('toMatchDotJsonSnapshot', () => {
    expect(dot).toMatchDotJsonSnapshot();
  });
  test('toBeValidDotAndMatchSnapshot', () => {
    expect(dot).toBeValidDotAndMatchSnapshot();
  });
  test('toBeValidDot', () => {
    expect(dot).toBeValidDot();
  });
});
