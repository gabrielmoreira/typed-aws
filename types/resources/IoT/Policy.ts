// CloudFormation Resource AWS::IoT::Policy

import { CFResource } from '../../base';

export type Policy_Type = 'AWS::IoT::Policy';
export const Policy_Type = 'AWS::IoT::Policy';

/**
 * Resource Type definition for AWS::IoT::Policy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html}
 */
export default function Policy(props: Policy_Properties) {
  return new CFResource<Policy_Type, Policy_Properties>(Policy_Type, props);
}

/**
 * Resource Type definition for AWS::IoT::Policy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html}
 */
export type Policy_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html#cfn-iot-policy-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-policy.html#cfn-iot-policy-policyname}
   */
  PolicyName?: string;
};
