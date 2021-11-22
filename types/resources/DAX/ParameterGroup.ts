// CloudFormation Resource AWS::DAX::ParameterGroup

import { CfnResource, Resolvable } from '../../base';

export type ParameterGroup_Type = 'AWS::DAX::ParameterGroup';
export const ParameterGroup_Type = 'AWS::DAX::ParameterGroup';

/**
 * Resource Type definition for AWS::DAX::ParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html}
 */
export default function ParameterGroup(props: ParameterGroup_Properties) {
  return new CfnResource<ParameterGroup_Properties>(ParameterGroup_Type, props);
}

/**
 * Resource Type definition for AWS::DAX::ParameterGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html}
 */
export type ParameterGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#cfn-dax-parametergroup-parameternamevalues}
   */
  ParameterNameValues?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#cfn-dax-parametergroup-description}
   */
  Description?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#cfn-dax-parametergroup-parametergroupname}
   */
  ParameterGroupName?: Resolvable<string>;
};
