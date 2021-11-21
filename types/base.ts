export const metadataInternalKey = Symbol('metadata');

export type ResourceMetadata = Record<string, unknown>;

export class CFResource<Type extends string, Props> {
  Type: Type;
  Properties: Props;

  constructor(Type: Type, Properties: Props) {
    this.Type = Type;
    this.Properties = Properties;
    Object.assign(this.metadata, { [metadataInternalKey]: {} });
  }

  metadata(): ResourceMetadata {
    return this.metadata[metadataInternalKey];
  }

  with(
    apply: (resource: CFResource<Type, Props>, metadata: ResourceMetadata) => void
  ): CFResource<Type, Props> {
    apply(this, this.metadata());
    return this;
  }
}
