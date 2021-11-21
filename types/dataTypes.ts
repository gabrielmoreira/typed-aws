export class IntrinsicFunction {
  constructor(name: string, payload: unknown) {
    this[name] = payload;
  }
}
export class ConditionIntrinsicFunction extends IntrinsicFunction {
  constructor(name: string, payload: unknown) {
    super(name, payload);
  }
}

export declare type Resolvable<T> = T | IntrinsicFunction;
export declare type Condition =
  | ConditionIntrinsicFunction
  | {
      Condition: Resolvable<string>;
    };
