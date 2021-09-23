const raw = Symbol();

interface IWrapper {
  [raw]: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function test(something: any): something is IWrapper {
  return something && typeof something[raw] === 'string';
}

function serialize(wrapper: IWrapper): string {
  return wrapper[raw];
}

export function wrap(value: string): IWrapper {
  return { [raw]: value };
}

export const SnapshotSerializer: jest.SnapshotSerializerPlugin = {
  test,
  serialize,
};

expect.addSnapshotSerializer(SnapshotSerializer);
