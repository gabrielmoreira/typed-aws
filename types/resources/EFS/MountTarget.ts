// CloudFormation Resource AWS::EFS::MountTarget

import { CfnResource, Resolvable } from '../../base';

export type MountTarget_Type = 'AWS::EFS::MountTarget';
export const MountTarget_Type = 'AWS::EFS::MountTarget';

/**
 * Resource Type definition for AWS::EFS::MountTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export default function MountTarget(props: MountTarget_Properties) {
  return new CfnResource<MountTarget_Properties>(MountTarget_Type, props);
}

/**
 * Resource Type definition for AWS::EFS::MountTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html}
 */
export type MountTarget_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-ipaddress}
   */
  IpAddress?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-filesystemid}
   */
  FileSystemId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-securitygroups}
   */
  SecurityGroups: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html#cfn-efs-mounttarget-subnetid}
   */
  SubnetId: Resolvable<string>;
};
