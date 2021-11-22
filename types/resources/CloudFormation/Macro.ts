// CloudFormation Resource AWS::CloudFormation::Macro

import { CfnResource, Resolvable } from '../../base';

export type Macro_Type = 'AWS::CloudFormation::Macro';
export const Macro_Type = 'AWS::CloudFormation::Macro';

/**
 * Resource Type definition for AWS::CloudFormation::Macro {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html}
 */
export default function Macro(props: Macro_Properties) {
  return new CfnResource<Macro_Properties>(Macro_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFormation::Macro {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html}
 */
export type Macro_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-functionname}
   */
  FunctionName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-loggroupname}
   */
  LogGroupName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-logrolearn}
   */
  LogRoleARN?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-name}
   */
  Name: Resolvable<string>;
};
