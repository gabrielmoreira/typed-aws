// CloudFormation Resource AWS::Glue::Registry

import { CFResource } from '../../base';

export type Registry_Type = 'AWS::Glue::Registry';
export const Registry_Type = 'AWS::Glue::Registry';

/**
 * This resource creates a Registry for authoring schemas as part of Glue
 * Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html}
 */
export default function Registry(props: Registry_Properties) {
  return new CFResource<Registry_Type, Registry_Properties>(
    Registry_Type,
    props
  );
}

/**
 * This resource creates a Registry for authoring schemas as part of Glue
 * Schema Registry. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html}
 */
export type Registry_Properties = {
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#cfn-glue-registry-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#cfn-glue-registry-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-registry.html#cfn-glue-registry-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
