// CloudFormation Resource AWS::Inspector::ResourceGroup

import { CfnResource, Resolvable } from '../../base';

export type ResourceGroup_Type = 'AWS::Inspector::ResourceGroup';
export const ResourceGroup_Type = 'AWS::Inspector::ResourceGroup';

/**
 * Resource Type definition for AWS::Inspector::ResourceGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html}
 */
export default function ResourceGroup(props: ResourceGroup_Properties) {
  return new CfnResource<ResourceGroup_Properties>(ResourceGroup_Type, props);
}

/**
 * Resource Type definition for AWS::Inspector::ResourceGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html}
 */
export type ResourceGroup_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-resourcegroup.html#cfn-inspector-resourcegroup-resourcegrouptags}
   */
  ResourceGroupTags: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
