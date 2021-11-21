// CloudFormation Resource AWS::Cognito::UserPoolUserToGroupAttachment

import { CfnResource } from '../../base';

export type UserPoolUserToGroupAttachment_Type =
  'AWS::Cognito::UserPoolUserToGroupAttachment';
export const UserPoolUserToGroupAttachment_Type =
  'AWS::Cognito::UserPoolUserToGroupAttachment';

/**
 * Resource Type definition for
 * AWS::Cognito::UserPoolUserToGroupAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html}
 */
export default function UserPoolUserToGroupAttachment(
  props: UserPoolUserToGroupAttachment_Properties
) {
  return new CfnResource<UserPoolUserToGroupAttachment_Properties>(
    UserPoolUserToGroupAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::Cognito::UserPoolUserToGroupAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html}
 */
export type UserPoolUserToGroupAttachment_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-groupname}
   */
  GroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-userpoolid}
   */
  UserPoolId: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-username}
   */
  Username: string;
};
