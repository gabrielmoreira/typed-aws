// CloudFormation Resource AWS::Cognito::UserPoolResourceServer

import { CfnResource } from '../../base';

export type UserPoolResourceServer_Type =
  'AWS::Cognito::UserPoolResourceServer';
export const UserPoolResourceServer_Type =
  'AWS::Cognito::UserPoolResourceServer';

/**
 * Resource Type definition for AWS::Cognito::UserPoolResourceServer
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html}
 */
export default function UserPoolResourceServer(
  props: UserPoolResourceServer_Properties
) {
  return new CfnResource<UserPoolResourceServer_Properties>(
    UserPoolResourceServer_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Cognito::UserPoolResourceServer
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html}
 */
export type UserPoolResourceServer_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-userpoolid}
   */
  UserPoolId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-identifier}
   */
  Identifier: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-scopes}
   */
  Scopes?: ResourceServerScopeType[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-name}
   */
  Name: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html}
 */
export type ResourceServerScopeType = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopename}
   */
  ScopeName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopedescription}
   */
  ScopeDescription: string;
};
