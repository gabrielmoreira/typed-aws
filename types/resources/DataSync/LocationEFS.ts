// CloudFormation Resource AWS::DataSync::LocationEFS

import { CFResource } from '../../base';

export type LocationEFS_Type = 'AWS::DataSync::LocationEFS';
export const LocationEFS_Type = 'AWS::DataSync::LocationEFS';

/**
 * Resource schema for AWS::DataSync::LocationEFS. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html}
 */
export default function LocationEFS(props: LocationEFS_Properties) {
  return new CFResource<LocationEFS_Type, LocationEFS_Properties>(
    LocationEFS_Type,
    props
  );
}

/**
 * Resource schema for AWS::DataSync::LocationEFS. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html}
 */
export type LocationEFS_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-ec2config}
   */
  Ec2Config: Ec2Config;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-efsfilesystemarn}
   */
  EfsFilesystemArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-subdirectory}
   */
  Subdirectory?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationefs.html#cfn-datasync-locationefs-tags}
   */
  Tags?: Tag[];
  LocationArn?: string;
  LocationUri?: string;
};

/**
 * The subnet and security group that DataSync uses to access target EFS
 * file system. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html}
 */
export type Ec2Config = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html#cfn-datasync-locationefs-ec2config-securitygrouparns}
   */
  SecurityGroupArns: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locationefs-ec2config.html#cfn-datasync-locationefs-ec2config-subnetarn}
   */
  SubnetArn: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
