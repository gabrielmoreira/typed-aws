// CloudFormation Resource AWS::IAM::Policy

import { CFResource } from '../../base';

export type Policy_Type = 'AWS::IAM::Policy';
export const Policy_Type = 'AWS::IAM::Policy';

/**
 * Resource Type definition for AWS::IAM::Policy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export default function Policy(props: Policy_Properties) {
  return new CFResource<Policy_Type, Policy_Properties>(Policy_Type, props);
}

/**
 * Resource Type definition for AWS::IAM::Policy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export type Policy_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-groups}
   */
  Groups?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policyname}
   */
  PolicyName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-roles}
   */
  Roles?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-users}
   */
  Users?: string[];
};
