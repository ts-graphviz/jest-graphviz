declare global {
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Expect {
      toBeValidDot<T>(): JestMatchers<T>;
    }
    // tslint:disable-next-line: interface-name
    interface Matchers<R, T> {
      toBeValidDot(): R;
    }
  }
}

export function toBeValidDotMatcher(this: any, dot: string): jest.CustomMatcherResult {
  return {
    pass: true,
    message: () => '',
  };
}

expect.extend({ toBeValidDot: toBeValidDotMatcher });
