import { execSync } from 'child_process';

function execCommand(command: string, input: string) {
  const result = execSync(command, {
    stdio: 'pipe',
    input,
  });
  return result.toString();
}

export function dotStdin(input: string): string {
  return execCommand('dot -Tdot', input);
}

export function jsonStdin(input: string): object {
  return JSON.parse(execCommand('dot -Tdot_json', input));
}
