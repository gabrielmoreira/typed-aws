// CloudFormation Resource AWS::MediaPackage::Asset

import { CfnResource } from '../../base';

export type Asset_Type = 'AWS::MediaPackage::Asset';
export const Asset_Type = 'AWS::MediaPackage::Asset';

/**
 * Resource schema for AWS::MediaPackage::Asset {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html}
 */
export default function Asset(props: Asset_Properties) {
  return new CfnResource<Asset_Properties>(Asset_Type, props);
}

/**
 * Resource schema for AWS::MediaPackage::Asset {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html}
 */
export type Asset_Properties = {
  Arn?: string;
  CreatedAt?: string;
  EgressEndpoints?: EgressEndpoint[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#cfn-mediapackage-asset-id}
   */
  Id: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#cfn-mediapackage-asset-packaginggroupid}
   */
  PackagingGroupId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#cfn-mediapackage-asset-resourceid}
   */
  ResourceId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#cfn-mediapackage-asset-sourcearn}
   */
  SourceArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#cfn-mediapackage-asset-sourcerolearn}
   */
  SourceRoleArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-asset.html#cfn-mediapackage-asset-tags}
   */
  Tags?: Tag[];
};

/**
 * The endpoint URL used to access an Asset using one
 * PackagingConfiguration. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-asset-egressendpoint.html}
 */
export type EgressEndpoint = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-asset-egressendpoint.html#cfn-mediapackage-asset-egressendpoint-packagingconfigurationid}
   */
  PackagingConfigurationId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-asset-egressendpoint.html#cfn-mediapackage-asset-egressendpoint-url}
   */
  Url: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
