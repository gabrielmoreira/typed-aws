// CloudFormation Resource AWS::Cognito::UserPoolUICustomizationAttachment

import { CfnResource, Resolvable } from '../../base';

export type UserPoolUICustomizationAttachment_Type =
  'AWS::Cognito::UserPoolUICustomizationAttachment';
export const UserPoolUICustomizationAttachment_Type =
  'AWS::Cognito::UserPoolUICustomizationAttachment';

/**
 * Resource Type definition for
 * AWS::Cognito::UserPoolUICustomizationAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html}
 */
export default function UserPoolUICustomizationAttachment(
  props: UserPoolUICustomizationAttachment_Properties
) {
  return new CfnResource<UserPoolUICustomizationAttachment_Properties>(
    UserPoolUICustomizationAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::Cognito::UserPoolUICustomizationAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html}
 */
export type UserPoolUICustomizationAttachment_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-clientid}
   */
  ClientId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-css}
   */
  CSS?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-userpoolid}
   */
  UserPoolId: Resolvable<string>;
  Id?: Resolvable<string>;
};
