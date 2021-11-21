// CloudFormation Resource AWS::DataSync::LocationSMB

import { CfnResource } from '../../base';

export type LocationSMB_Type = 'AWS::DataSync::LocationSMB';
export const LocationSMB_Type = 'AWS::DataSync::LocationSMB';

/**
 * Resource schema for AWS::DataSync::LocationSMB. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export default function LocationSMB(props: LocationSMB_Properties) {
  return new CfnResource<LocationSMB_Properties>(LocationSMB_Type, props);
}

/**
 * Resource schema for AWS::DataSync::LocationSMB. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html}
 */
export type LocationSMB_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-agentarns}
   */
  AgentArns: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-domain}
   */
  Domain?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-mountoptions}
   */
  MountOptions?: MountOptions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-password}
   */
  Password: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-serverhostname}
   */
  ServerHostname: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-subdirectory}
   */
  Subdirectory: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-user}
   */
  User: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-tags}
   */
  Tags?: Tag[];
  LocationArn?: string;
  LocationUri?: string;
};

/**
 * The mount options used by DataSync to access the SMB server. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html}
 */
export type MountOptions = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationsmb-mountoptions.html#cfn-datasync-locationsmb-mountoptions-version}
   */
  Version?: 'AUTOMATIC' | 'SMB2' | 'SMB3';
};

export type Tag = {
  Key: string;
  Value: string;
};
