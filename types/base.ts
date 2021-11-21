import {
  CreationPolicy,
  DeletionPolicy,
  DependsOn,
  Metadata,
  UpdatePolicy,
  UpdateReplacePolicy,
} from './cfn';
import { IntrinsicFunction, Resolvable } from './dataTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CfnResource<TProps extends CfnResourceProps>
  implements ICfnResource<TProps>
{
  Type: string;
  Properties?: TProps;
  DependsOn?: DependsOn;
  Metadata?: Metadata;
  CreationPolicy?: CreationPolicy;
  DeletionPolicy?: DeletionPolicy;
  UpdatePolicy?: UpdatePolicy;
  UpdateReplacePolicy?: UpdateReplacePolicy;
  Condition?: Resolvable<string>;

  constructor(Type: string, Properties?: TProps) {
    this.Type = Type;
    this.Properties = Properties;
  }

  dependsOn(dependencies: DependsOn) {
    const newDependencies: DependsOn[] = Array.isArray(dependencies)
      ? dependencies
      : [dependencies];
    if (
      typeof this.DependsOn === 'undefined' ||
      this.DependsOn instanceof IntrinsicFunction
    ) {
      this.DependsOn = [...newDependencies];
    } else {
      this.DependsOn.push(...newDependencies);
    }
    return this;
  }

  setDependsOn(dependencies: DependsOn) {
    this.DependsOn = dependencies;
    return this;
  }

  metadata(metadata: { [key: string]: unknown }) {
    this.Metadata = this.Metadata || {};
    Object.assign(this.Metadata, metadata);
    return this;
  }

  setMetadata(metadata: { [key: string]: unknown }) {
    this.Metadata = metadata;
    return this;
  }

  creationPolicy(policy: CreationPolicy) {
    this.CreationPolicy = policy;
    return this;
  }

  deletionPolicy(policy: DeletionPolicy) {
    this.DeletionPolicy = policy;
    return this;
  }

  updatePolicy(policy: UpdatePolicy) {
    this.UpdatePolicy = policy;
    return this;
  }

  condition(condition: Resolvable<string>) {
    this.Condition = condition;
    return this;
  }

  with(apply: (resource: ThisType<this>) => void) {
    apply(this);
    return this;
  }
}

export interface ICfnResource<TProps extends CfnResourceProps> {
  Type: string;
  Properties?: TProps;
  DependsOn?: DependsOn;
  Metadata?: Metadata;
  CreationPolicy?: CreationPolicy;
  DeletionPolicy?: DeletionPolicy;
  UpdatePolicy?: UpdatePolicy;
  UpdateReplacePolicy?: UpdateReplacePolicy;
  Condition?: Resolvable<string>;
}

export type CfnResourceProps = {
  [k: string]: unknown;
};
