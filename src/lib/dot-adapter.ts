import cp from 'child_process';

function execCommand(command: string, input: string): Buffer {
  return cp.execSync(command, {
    stdio: 'pipe',
    input,
  });
}

export function checkValidDot(dot: string): void {
  try {
    dotJsonStdin(dot);
  } catch (error) {
    throw error;
  }
}

export function dotJsonStdin(input: string): object {
  return JSON.parse(execCommand('dot -Tdot_json', input).toString());
}
