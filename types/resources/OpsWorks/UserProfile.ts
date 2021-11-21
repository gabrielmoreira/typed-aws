// CloudFormation Resource AWS::OpsWorks::UserProfile

import { CfnResource } from '../../base';

export type UserProfile_Type = 'AWS::OpsWorks::UserProfile';
export const UserProfile_Type = 'AWS::OpsWorks::UserProfile';

/**
 * Resource Type definition for AWS::OpsWorks::UserProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html}
 */
export default function UserProfile(props: UserProfile_Properties) {
  return new CfnResource<UserProfile_Properties>(UserProfile_Type, props);
}

/**
 * Resource Type definition for AWS::OpsWorks::UserProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html}
 */
export type UserProfile_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-sshusername}
   */
  SshUsername?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-allowselfmanagement}
   */
  AllowSelfManagement?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-iamuserarn}
   */
  IamUserArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-userprofile.html#cfn-opsworks-userprofile-sshpublickey}
   */
  SshPublicKey?: string;
};
