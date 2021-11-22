// CloudFormation Resource AWS::S3::MultiRegionAccessPoint

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<MultiRegionAccessPoint_Properties>(
    MultiRegionAccessPoint_Type,
    props
  );
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
  Name?: Resolvable<string>;
  Alias?: Resolvable<string>;
  CreatedAt?: Resolvable<string>;
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
  BlockPublicAcls?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-ignorepublicacls}
   */
  IgnorePublicAcls?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicpolicy}
   */
  BlockPublicPolicy?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-restrictpublicbuckets}
   */
  RestrictPublicBuckets?: Resolvable<boolean>;
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
  Bucket: Resolvable<string>;
};
