// CloudFormation Resource AWS::IAM::Group

import { CFResource } from '../../base';

export type Group_Type = 'AWS::IAM::Group';
export const Group_Type = 'AWS::IAM::Group';

/**
 * Resource Type definition for AWS::IAM::Group {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html}
 */
export default function Group(props: Group_Properties) {
  return new CFResource<Group_Type, Group_Properties>(Group_Type, props);
}

/**
 * Resource Type definition for AWS::IAM::Group {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html}
 */
export type Group_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html#cfn-iam-group-groupname}
   */
  GroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html#cfn-iam-group-managepolicyarns}
   */
  ManagedPolicyArns?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html#cfn-iam-group-path}
   */
  Path?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html#cfn-iam-group-policies}
   */
  Policies?: Policy[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html}
 */
export type Policy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html#cfn-iam-policies-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html#cfn-iam-policies-policyname}
   */
  PolicyName: string;
};
