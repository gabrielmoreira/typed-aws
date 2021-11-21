// CloudFormation Resource AWS::DataSync::LocationS3

import { CFResource } from '../../base';

export type LocationS3_Type = 'AWS::DataSync::LocationS3';
export const LocationS3_Type = 'AWS::DataSync::LocationS3';

/**
 * Resource schema for AWS::DataSync::LocationS3 {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html}
 */
export default function LocationS3(props: LocationS3_Properties) {
  return new CFResource<LocationS3_Type, LocationS3_Properties>(
    LocationS3_Type,
    props
  );
}

/**
 * Resource schema for AWS::DataSync::LocationS3 {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html}
 */
export type LocationS3_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-s3config}
   */
  S3Config: S3Config;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-s3bucketarn}
   */
  S3BucketArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-subdirectory}
   */
  Subdirectory?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-s3storageclass}
   */
  S3StorageClass?:
    | 'STANDARD'
    | 'STANDARD_IA'
    | 'ONEZONE_IA'
    | 'INTELLIGENT_TIERING'
    | 'GLACIER'
    | 'DEEP_ARCHIVE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locations3.html#cfn-datasync-locations3-tags}
   */
  Tags?: Tag[];
  LocationArn?: string;
  LocationUri?: string;
};

/**
 * The Amazon Resource Name (ARN) of the AWS IAM role that is used to
 * access an Amazon S3 bucket. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-s3config.html}
 */
export type S3Config = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-locations3-s3config.html#cfn-datasync-locations3-s3config-bucketaccessrolearn}
   */
  BucketAccessRoleArn: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
