// CloudFormation Resource AWS::IAM::Policy

import { CfnResource, Resolvable } from '../../base';

export type Policy_Type = 'AWS::IAM::Policy';
export const Policy_Type = 'AWS::IAM::Policy';

/**
 * Resource Type definition for AWS::IAM::Policy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export default function Policy(props: Policy_Properties) {
  return new CfnResource<Policy_Properties>(Policy_Type, props);
}

/**
 * Resource Type definition for AWS::IAM::Policy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html}
 */
export type Policy_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-groups}
   */
  Groups?: Resolvable<string>[];
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
  PolicyName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-roles}
   */
  Roles?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-users}
   */
  Users?: Resolvable<string>[];
};
