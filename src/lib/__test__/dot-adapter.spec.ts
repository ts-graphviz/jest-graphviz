import { checkValidDot, dotJsonStdin } from '../dot-adapter';

describe('checkValidDot test', () => {
  test('valid dot', () => {
    expect(() => {
      const dot = 'digraph g { a -> b; }';
      checkValidDot(dot);
    }).not.toThrow();
  });

  test('invalid dot, to throw error', () => {
    const dot = 'invalid';
    expect(() => {
      checkValidDot(dot);
    }).toThrow();
  });
});

const runOnWindows = process.platform === 'win32';
// Skip test on windows
// NOTE: Not support output json format on Graphviz windows statable now.
(runOnWindows ? describe.skip : describe)('dotJsonStdin test', () => {
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
