import { dotStdin } from './dot-stdin';

export function isValidDot(dot: string): jest.CustomMatcherResult {
  let pass: boolean;
  let message: string = 'expected value to be valid dot format.';
  try {
    dotStdin(dot);
    pass = true;
  } catch (error) {
    pass = false;
    message = error.stderr.toString();
  }
  return {
    pass,
    message: () => message,
  };
}
