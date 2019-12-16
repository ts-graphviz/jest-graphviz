import { execSync } from 'child_process';

function execCommand(command: string, input: string): Buffer {
  return execSync(command, {
    stdio: 'pipe',
    input,
  });
}

export function dotStdin(input: string): string {
  return execCommand('dot -Tdot', input).toString();
}

export function jsonStdin(input: string): object {
  return JSON.parse(execCommand('dot -Tdot_json', input).toString());
}
