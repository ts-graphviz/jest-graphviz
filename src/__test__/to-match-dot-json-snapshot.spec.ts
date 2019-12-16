import '../to-match-dot-json-snapshot';

describe('toMatchDotJsonSnapshot test', () => {
  test('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toMatchDotJsonSnapshot();
  });
});
