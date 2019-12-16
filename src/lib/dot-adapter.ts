import { execSync } from 'child_process';

function execCommand(command: string, input: string): Buffer {
  return execSync(command, {
    stdio: 'pipe',
    input,
  });
}

export function dotPlainStdin(input: string): string {
  return execCommand('dot -Tplain', input).toString();
}

export function dotJsonStdin(input: string): object {
  return JSON.parse(execCommand('dot -Tdot_json', input).toString());
}
