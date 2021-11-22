// CloudFormation Resource AWS::CloudFormation::WaitCondition

import { CfnResource, Resolvable } from '../../base';

export type WaitCondition_Type = 'AWS::CloudFormation::WaitCondition';
export const WaitCondition_Type = 'AWS::CloudFormation::WaitCondition';

/**
 * Resource Type definition for AWS::CloudFormation::WaitCondition {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html}
 */
export default function WaitCondition(props: WaitCondition_Properties) {
  return new CfnResource<WaitCondition_Properties>(WaitCondition_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFormation::WaitCondition {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html}
 */
export type WaitCondition_Properties = {
  Id?: Resolvable<string>;
  Data?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html#cfn-waitcondition-count}
   */
  Count?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html#cfn-waitcondition-handle}
   */
  Handle?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitcondition.html#cfn-waitcondition-timeout}
   */
  Timeout?: Resolvable<string>;
};
