// CloudFormation Resource AWS::Cognito::UserPoolGroup

import { CfnResource, Resolvable } from '../../base';

export type UserPoolGroup_Type = 'AWS::Cognito::UserPoolGroup';
export const UserPoolGroup_Type = 'AWS::Cognito::UserPoolGroup';

/**
 * Resource Type definition for AWS::Cognito::UserPoolGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html}
 */
export default function UserPoolGroup(props: UserPoolGroup_Properties) {
  return new CfnResource<UserPoolGroup_Properties>(UserPoolGroup_Type, props);
}

/**
 * Resource Type definition for AWS::Cognito::UserPoolGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html}
 */
export type UserPoolGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-groupname}
   */
  GroupName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-userpoolid}
   */
  UserPoolId: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-precedence}
   */
  Precedence?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-rolearn}
   */
  RoleArn?: Resolvable<string>;
};
