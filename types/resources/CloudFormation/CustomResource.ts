// CloudFormation Resource AWS::CloudFormation::CustomResource

import { CfnResource, Resolvable } from '../../base';

export type CustomResource_Type = 'AWS::CloudFormation::CustomResource';
export const CustomResource_Type = 'AWS::CloudFormation::CustomResource';

/**
 * Resource Type definition for AWS::CloudFormation::CustomResource
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html}
 */
export default function CustomResource(props: CustomResource_Properties) {
  return new CfnResource<CustomResource_Properties>(CustomResource_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFormation::CustomResource
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html}
 */
export type CustomResource_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cfn-customresource.html#cfn-customresource-servicetoken}
   */
  ServiceToken: Resolvable<string>;
};
