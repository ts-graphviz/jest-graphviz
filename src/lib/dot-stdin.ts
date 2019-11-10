import { execSync } from 'child_process';

export function dotStdin(input: string): string {
  const command = 'dot';
  const result = execSync(command, {
    stdio: 'pipe',
    input,
  });
  return result.toString();
}
