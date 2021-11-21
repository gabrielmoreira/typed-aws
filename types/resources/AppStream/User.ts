// CloudFormation Resource AWS::AppStream::User

import { CfnResource } from '../../base';

export type User_Type = 'AWS::AppStream::User';
export const User_Type = 'AWS::AppStream::User';

/**
 * Resource Type definition for AWS::AppStream::User {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html}
 */
export default function User(props: User_Properties) {
  return new CfnResource<User_Properties>(User_Type, props);
}

/**
 * Resource Type definition for AWS::AppStream::User {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html}
 */
export type User_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-username}
   */
  UserName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-lastname}
   */
  LastName?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-firstname}
   */
  FirstName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-messageaction}
   */
  MessageAction?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-authenticationtype}
   */
  AuthenticationType: string;
};
