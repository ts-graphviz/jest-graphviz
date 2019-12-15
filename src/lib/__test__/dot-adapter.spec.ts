import { dotStdin, jsonStdin } from '../dot-adapter';

describe('dotStdin test', () => {
  test('valid dot', () => {
    const dot = 'digraph g { a -> b; }';
    const result = dotStdin(dot);
    expect(result).toMatchSnapshot();
  });

  test('invalid dot, to throw error', () => {
    const dot = 'invalid';
    expect(() => {
      dotStdin(dot);
    }).toThrow();
  });
});

describe('jsonStdin test', () => {
  test('valid dot', () => {
    const dot = 'digraph g { a -> b; }';
    const result = jsonStdin(dot);
    expect(result).toMatchSnapshot();
  });

  test('invalid dot, to throw error', () => {
    const dot = 'invalid';
    expect(() => {
      jsonStdin(dot);
    }).toThrow();
  });
});
