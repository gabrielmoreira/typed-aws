// CloudFormation Resource AWS::EFS::MountTarget

import { CFResource } from '../../base';

export type MountTarget_Type = 'AWS::EFS::MountTarget';
export const MountTarget_Type = 'AWS::EFS::MountTarget';

/**
 * Resource Type definition for AWS::EFS::MountTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export default function MountTarget(props: MountTarget_Properties) {
  return new CFResource<MountTarget_Type, MountTarget_Properties>(
    MountTarget_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EFS::MountTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export type MountTarget_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-ipaddress}
   */
  IpAddress?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-filesystemid}
   */
  FileSystemId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-securitygroups}
   */
  SecurityGroups: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-subnetid}
   */
  SubnetId: string;
};
