import '../to-be-valid-dot-and-match-snapshot';

describe('toBeValidDotAndMatchSnapshot test', () => {
  test('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toBeValidDotAndMatchSnapshot();
  });
});
