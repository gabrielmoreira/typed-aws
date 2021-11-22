// CloudFormation Resource AWS::CloudFormation::Stack

import { CfnResource, Resolvable } from '../../base';

export type Stack_Type = 'AWS::CloudFormation::Stack';
export const Stack_Type = 'AWS::CloudFormation::Stack';

/**
 * Resource Type definition for AWS::CloudFormation::Stack {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html}
 */
export default function Stack(props: Stack_Properties) {
  return new CfnResource<Stack_Properties>(Stack_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFormation::Stack {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html}
 */
export type Stack_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-notificationarns}
   */
  NotificationARNs?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-parameters}
   */
  Parameters?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-templateurl}
   */
  TemplateURL: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-timeoutinminutes}
   */
  TimeoutInMinutes?: Resolvable<number>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
