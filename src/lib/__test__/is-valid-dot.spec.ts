import { isValidDot } from '../is-valid-dot';
describe('isValidDot test', () => {
  test('matcher works', () => {
    const dot = 'digraph g { a -> b; }';
    const result = isValidDot(dot);
    expect(result.pass).toBe(true);
    expect(result.message()).toBe('expected value to be valid dot format.');
  });

  test('invalid dot', () => {
    const dot = 'invalid';
    const result = isValidDot(dot);
    expect(result.pass).toBe(false);
    expect(result.message()).toContain('syntax error in line 1 near ');
  });
});
