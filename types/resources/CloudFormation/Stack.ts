// CloudFormation Resource AWS::CloudFormation::Stack

import { CfnResource } from '../../base';

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
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-notificationarns}
   */
  NotificationARNs?: string[];
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
  TemplateURL: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stack.html#cfn-cloudformation-stack-timeoutinminutes}
   */
  TimeoutInMinutes?: number;
};

export type Tag = {
  Key: string;
  Value: string;
};
