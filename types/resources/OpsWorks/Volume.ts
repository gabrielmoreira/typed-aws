// CloudFormation Resource AWS::OpsWorks::Volume

import { CfnResource } from '../../base';

export type Volume_Type = 'AWS::OpsWorks::Volume';
export const Volume_Type = 'AWS::OpsWorks::Volume';

/**
 * Resource Type definition for AWS::OpsWorks::Volume {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html}
 */
export default function Volume(props: Volume_Properties) {
  return new CfnResource<Volume_Properties>(Volume_Type, props);
}

/**
 * Resource Type definition for AWS::OpsWorks::Volume {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html}
 */
export type Volume_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-ec2volumeid}
   */
  Ec2VolumeId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-mountpoint}
   */
  MountPoint?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html#cfn-opsworks-volume-stackid}
   */
  StackId: string;
};
