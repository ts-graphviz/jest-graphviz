import '../to-be-valid-dot';

describe('toBeValidDot test', () => {
  it('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    expect(dot).toBeValidDot();
  });

  it('invalid dot', () => {
    const dot = 'invalid';
    expect(dot).not.toBeValidDot();
  });
});
