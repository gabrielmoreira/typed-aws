// CloudFormation Resource AWS::S3::MultiRegionAccessPoint

import { CFResource } from '../../base';

export type MultiRegionAccessPoint_Type = 'AWS::S3::MultiRegionAccessPoint';
export const MultiRegionAccessPoint_Type = 'AWS::S3::MultiRegionAccessPoint';

/**
 * AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that
 * dynamically routes S3 requests to easily satisfy geographic compliance
 * requirements based on customer-defined routing policies. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html}
 */
export default function MultiRegionAccessPoint(
  props: MultiRegionAccessPoint_Properties
) {
  return new CFResource<
    MultiRegionAccessPoint_Type,
    MultiRegionAccessPoint_Properties
  >(MultiRegionAccessPoint_Type, props);
}

/**
 * AWS::S3::MultiRegionAccessPoint is an Amazon S3 resource type that
 * dynamically routes S3 requests to easily satisfy geographic compliance
 * requirements based on customer-defined routing policies. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html}
 */
export type MultiRegionAccessPoint_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-name}
   */
  Name?: string;
  Alias?: string;
  CreatedAt?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration}
   */
  PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-regions}
   */
  Regions: Region[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html}
 */
export type PublicAccessBlockConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicacls}
   */
  BlockPublicAcls?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-ignorepublicacls}
   */
  IgnorePublicAcls?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicpolicy}
   */
  BlockPublicPolicy?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-restrictpublicbuckets}
   */
  RestrictPublicBuckets?: boolean;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html}
 */
export type Region = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html#cfn-s3-multiregionaccesspoint-region-bucket}
   */
  Bucket: string;
};
