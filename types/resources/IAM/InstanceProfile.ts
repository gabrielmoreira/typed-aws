// CloudFormation Resource AWS::IAM::InstanceProfile

import { CfnResource, Resolvable } from '../../base';

export type InstanceProfile_Type = 'AWS::IAM::InstanceProfile';
export const InstanceProfile_Type = 'AWS::IAM::InstanceProfile';

/**
 * Resource Type definition for AWS::IAM::InstanceProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 */
export default function InstanceProfile(props: InstanceProfile_Properties) {
  return new CfnResource<InstanceProfile_Properties>(
    InstanceProfile_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IAM::InstanceProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 */
export type InstanceProfile_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html#cfn-iam-instanceprofile-path}
   */
  Path?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html#cfn-iam-instanceprofile-roles}
   */
  Roles: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html#cfn-iam-instanceprofile-instanceprofilename}
   */
  InstanceProfileName?: Resolvable<string>;
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
};
