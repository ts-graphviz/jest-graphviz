import { dotJsonStdin } from './dot-adapter';

export function isValidDot(dot: string): jest.CustomMatcherResult {
  let pass: boolean;
  let message: string = 'expected value to be valid dot format.';
  try {
    dotJsonStdin(dot);
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
