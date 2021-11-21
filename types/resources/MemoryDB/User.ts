// CloudFormation Resource AWS::MemoryDB::User

import { CfnResource } from '../../base';

export type User_Type = 'AWS::MemoryDB::User';
export const User_Type = 'AWS::MemoryDB::User';

/**
 * Resource Type definition for AWS::MemoryDB::User {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html}
 */
export default function User(props: User_Properties) {
  return new CfnResource<User_Properties>(User_Type, props);
}

/**
 * Resource Type definition for AWS::MemoryDB::User {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html}
 */
export type User_Properties = {
  Status?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-username}
   */
  UserName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-accessstring}
   */
  AccessString: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-authenticationmode}
   */
  AuthenticationMode: {
    Type?: 'password';
    Passwords?: string[];
  };
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
