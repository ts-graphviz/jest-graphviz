import { dotJsonStdin, dotPlainStdin } from '../dot-adapter';

describe('dotPlainStdin test', () => {
  test('valid dot', () => {
    const dot = 'digraph g { a -> b; }';
    const result = dotPlainStdin(dot);
    expect(result).toMatchSnapshot();
  });

  test('invalid dot, to throw error', () => {
    const dot = 'invalid';
    expect(() => {
      dotPlainStdin(dot);
    }).toThrow();
  });
});

describe('dotJsonStdin test', () => {
  test('valid dot', () => {
    const dot = 'digraph g { a -> b; }';
    const result = dotJsonStdin(dot);
    expect(result).toMatchSnapshot();
  });

  test('invalid dot, to throw error', () => {
    const dot = 'invalid';
    expect(() => {
      dotJsonStdin(dot);
    }).toThrow();
  });
});
