import { IntrinsicFunction, Resolvable } from './dataTypes';

export type DependsOn = Resolvable<(string | IntrinsicFunction)[]>;
export type Metadata = { [key: string]: unknown };
export type DeletionPolicy = 'Delete' | 'Retain' | 'Snapshot';
export type UpdateReplacePolicy = 'Delete' | 'Retain' | 'Snapshot';
export type UpdatePolicy = {
  [k: string]: unknown;
};
export type CreationPolicy = {
  [k: string]: unknown;
};

export type Condition = IntrinsicFunction | { Condition: Resolvable<string> };
