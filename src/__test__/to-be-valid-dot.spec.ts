import '../to-be-valid-dot';

describe('toBeValidDot test', () => {
  test('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toBeValidDot();
  });

  test('invalid dot', () => {
    const dot = 'invalid';
    expect(dot).not.toBeValidDot();
  });
});
