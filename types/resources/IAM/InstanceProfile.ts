// CloudFormation Resource AWS::IAM::InstanceProfile

import { CFResource } from '../../base';

export type InstanceProfile_Type = 'AWS::IAM::InstanceProfile';
export const InstanceProfile_Type = 'AWS::IAM::InstanceProfile';

/**
 * Resource Type definition for AWS::IAM::InstanceProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html}
 */
export default function InstanceProfile(props: InstanceProfile_Properties) {
  return new CFResource<InstanceProfile_Type, InstanceProfile_Properties>(
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
  Path?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html#cfn-iam-instanceprofile-roles}
   */
  Roles: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html#cfn-iam-instanceprofile-instanceprofilename}
   */
  InstanceProfileName?: string;
  Id?: string;
  Arn?: string;
};
