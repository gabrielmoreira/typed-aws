// CloudFormation Resource AWS::Signer::ProfilePermission

import { CfnResource } from '../../base';

export type ProfilePermission_Type = 'AWS::Signer::ProfilePermission';
export const ProfilePermission_Type = 'AWS::Signer::ProfilePermission';

/**
 * An example resource schema demonstrating some basic constructs and
 * validation rules. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html}
 */
export default function ProfilePermission(props: ProfilePermission_Properties) {
  return new CfnResource<ProfilePermission_Properties>(
    ProfilePermission_Type,
    props
  );
}

/**
 * An example resource schema demonstrating some basic constructs and
 * validation rules. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html}
 */
export type ProfilePermission_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-profilename}
   */
  ProfileName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-profileversion}
   */
  ProfileVersion?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-action}
   */
  Action: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-principal}
   */
  Principal: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-profilepermission.html#cfn-signer-profilepermission-statementid}
   */
  StatementId: string;
};
