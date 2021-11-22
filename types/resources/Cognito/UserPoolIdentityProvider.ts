// CloudFormation Resource AWS::Cognito::UserPoolIdentityProvider

import { CfnResource, Resolvable } from '../../base';

export type UserPoolIdentityProvider_Type =
  'AWS::Cognito::UserPoolIdentityProvider';
export const UserPoolIdentityProvider_Type =
  'AWS::Cognito::UserPoolIdentityProvider';

/**
 * Resource Type definition for AWS::Cognito::UserPoolIdentityProvider
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html}
 */
export default function UserPoolIdentityProvider(
  props: UserPoolIdentityProvider_Properties
) {
  return new CfnResource<UserPoolIdentityProvider_Properties>(
    UserPoolIdentityProvider_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Cognito::UserPoolIdentityProvider
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html}
 */
export type UserPoolIdentityProvider_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-providername}
   */
  ProviderName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-userpoolid}
   */
  UserPoolId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-attributemapping}
   */
  AttributeMapping?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-providerdetails}
   */
  ProviderDetails?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-providertype}
   */
  ProviderType: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolidentityprovider.html#cfn-cognito-userpoolidentityprovider-idpidentifiers}
   */
  IdpIdentifiers?: Resolvable<string>[];
};
