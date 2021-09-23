import { dotPlainStdin } from './dot-adapter';

export function isValidDot(dot: string): jest.CustomMatcherResult {
  let pass: boolean;
  let message = 'expected value to be valid dot format.';
  try {
    dotPlainStdin(dot);
    pass = true;
  } catch (error) {
    pass = false;
    message = (error as { stderr: Buffer }).stderr.toString();
  }
  return {
    pass,
    message: () => message,
  };
}
