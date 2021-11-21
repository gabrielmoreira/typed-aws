// CloudFormation Resource AWS::Cognito::IdentityPoolRoleAttachment

import { CFResource } from '../../base';

export type IdentityPoolRoleAttachment_Type =
  'AWS::Cognito::IdentityPoolRoleAttachment';
export const IdentityPoolRoleAttachment_Type =
  'AWS::Cognito::IdentityPoolRoleAttachment';

/**
 * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html}
 */
export default function IdentityPoolRoleAttachment(
  props: IdentityPoolRoleAttachment_Properties
) {
  return new CFResource<
    IdentityPoolRoleAttachment_Type,
    IdentityPoolRoleAttachment_Properties
  >(IdentityPoolRoleAttachment_Type, props);
}

/**
 * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html}
 */
export type IdentityPoolRoleAttachment_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-identitypoolid}
   */
  IdentityPoolId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-roles}
   */
  Roles?: {
    [k: string]: unknown;
  };
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemappings}
   */
  RoleMappings?: {
    [k: string]: unknown;
  };
};
