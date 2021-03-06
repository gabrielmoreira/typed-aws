// CloudFormation Resource AWS::DataSync::LocationNFS

import { CfnResource, Resolvable } from '../../base';

export type LocationNFS_Type = 'AWS::DataSync::LocationNFS';
export const LocationNFS_Type = 'AWS::DataSync::LocationNFS';

/**
 * Resource schema for AWS::DataSync::LocationNFS {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html}
 */
export default function LocationNFS(props: LocationNFS_Properties) {
  return new CfnResource<LocationNFS_Properties>(LocationNFS_Type, props);
}

/**
 * Resource schema for AWS::DataSync::LocationNFS {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html}
 */
export type LocationNFS_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-mountoptions}
   */
  MountOptions?: MountOptions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-onpremconfig}
   */
  OnPremConfig: OnPremConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-serverhostname}
   */
  ServerHostname: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-subdirectory}
   */
  Subdirectory: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationnfs.html#cfn-datasync-locationnfs-tags}
   */
  Tags?: Tag[];
  LocationArn?: Resolvable<string>;
  LocationUri?: Resolvable<string>;
};

/**
 * The NFS mount options that DataSync can use to mount your NFS share.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html}
 */
export type MountOptions = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-mountoptions.html#cfn-datasync-locationnfs-mountoptions-version}
   */
  Version?: Resolvable<'AUTOMATIC' | 'NFS3' | 'NFS4_0' | 'NFS4_1'>;
};

/**
 * Contains a list of Amazon Resource Names (ARNs) of agents that are
 * used to connect an NFS server. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html}
 */
export type OnPremConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationnfs-onpremconfig.html#cfn-datasync-locationnfs-onpremconfig-agentarns}
   */
  AgentArns: Resolvable<string>[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
