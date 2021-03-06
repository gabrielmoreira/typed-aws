// CloudFormation Resource AWS::Cognito::UserPoolDomain

import { CfnResource, Resolvable } from '../../base';

export type UserPoolDomain_Type = 'AWS::Cognito::UserPoolDomain';
export const UserPoolDomain_Type = 'AWS::Cognito::UserPoolDomain';

/**
 * Resource Type definition for AWS::Cognito::UserPoolDomain {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html}
 */
export default function UserPoolDomain(props: UserPoolDomain_Properties) {
  return new CfnResource<UserPoolDomain_Properties>(UserPoolDomain_Type, props);
}

/**
 * Resource Type definition for AWS::Cognito::UserPoolDomain {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html}
 */
export type UserPoolDomain_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-userpoolid}
   */
  UserPoolId: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-domain}
   */
  Domain: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-customdomainconfig}
   */
  CustomDomainConfig?: CustomDomainConfigType;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html}
 */
export type CustomDomainConfigType = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html#cfn-cognito-userpooldomain-customdomainconfigtype-certificatearn}
   */
  CertificateArn?: Resolvable<string>;
};
