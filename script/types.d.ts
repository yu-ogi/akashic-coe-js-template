interface FooCommand {
  type: string;
}

interface FooActionData {
  type: string;
}

declare global {
  type Command = FooCommand;
  type ActionData = FooActionData;
}

export {};
