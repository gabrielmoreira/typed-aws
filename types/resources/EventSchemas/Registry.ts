// CloudFormation Resource AWS::EventSchemas::Registry

import { CfnResource, Resolvable } from '../../base';

export type Registry_Type = 'AWS::EventSchemas::Registry';
export const Registry_Type = 'AWS::EventSchemas::Registry';

/**
 * Resource Type definition for AWS::EventSchemas::Registry {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html}
 */
export default function Registry(props: Registry_Properties) {
  return new CfnResource<Registry_Properties>(Registry_Type, props);
}

/**
 * Resource Type definition for AWS::EventSchemas::Registry {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html}
 */
export type Registry_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#cfn-eventschemas-registry-registryname}
   */
  RegistryName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#cfn-eventschemas-registry-description}
   */
  Description?: Resolvable<string>;
  Id?: Resolvable<string>;
  RegistryArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registry.html#cfn-eventschemas-registry-tags}
   */
  Tags?: TagsEntry[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html}
 */
export type TagsEntry = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html#cfn-eventschemas-registry-tagsentry-value}
   */
  Value: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eventschemas-registry-tagsentry.html#cfn-eventschemas-registry-tagsentry-key}
   */
  Key: Resolvable<string>;
};
