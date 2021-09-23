import cp from 'child_process';

function execCommand(command: string, input: string): Buffer {
  return cp.execSync(command, {
    stdio: 'pipe',
    input,
  });
}

export function dotPlainStdin(input: string): Buffer {
  return execCommand('dot -Tplain', input);
}

export function checkValidDot(dot: string): void {
  try {
    dotPlainStdin(dot);
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function dotJsonStdin(input: string): object {
  return JSON.parse(execCommand('dot -Tdot_json', input).toString());
}
