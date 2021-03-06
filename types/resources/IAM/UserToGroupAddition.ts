// CloudFormation Resource AWS::IAM::UserToGroupAddition

import { CfnResource, Resolvable } from '../../base';

export type UserToGroupAddition_Type = 'AWS::IAM::UserToGroupAddition';
export const UserToGroupAddition_Type = 'AWS::IAM::UserToGroupAddition';

/**
 * Resource Type definition for AWS::IAM::UserToGroupAddition {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html}
 */
export default function UserToGroupAddition(
  props: UserToGroupAddition_Properties
) {
  return new CfnResource<UserToGroupAddition_Properties>(
    UserToGroupAddition_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IAM::UserToGroupAddition {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html}
 */
export type UserToGroupAddition_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html#cfn-iam-addusertogroup-groupname}
   */
  GroupName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html#cfn-iam-addusertogroup-users}
   */
  Users: Resolvable<string>[];
};
