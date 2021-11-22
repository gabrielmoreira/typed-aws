// CloudFormation Resource AWS::MediaPackage::PackagingGroup

import { CfnResource, Resolvable } from '../../base';

export type PackagingGroup_Type = 'AWS::MediaPackage::PackagingGroup';
export const PackagingGroup_Type = 'AWS::MediaPackage::PackagingGroup';

/**
 * Resource schema for AWS::MediaPackage::PackagingGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html}
 */
export default function PackagingGroup(props: PackagingGroup_Properties) {
  return new CfnResource<PackagingGroup_Properties>(PackagingGroup_Type, props);
}

/**
 * Resource schema for AWS::MediaPackage::PackagingGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html}
 */
export type PackagingGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html#cfn-mediapackage-packaginggroup-id}
   */
  Id: Resolvable<string>;
  Arn?: Resolvable<string>;
  DomainName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html#cfn-mediapackage-packaginggroup-authorization}
   */
  Authorization?: Authorization;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html#cfn-mediapackage-packaginggroup-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html#cfn-mediapackage-packaginggroup-egressaccesslogs}
   */
  EgressAccessLogs?: LogConfiguration;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-authorization.html}
 */
export type Authorization = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-authorization.html#cfn-mediapackage-packaginggroup-authorization-cdnidentifiersecret}
   */
  CdnIdentifierSecret: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-authorization.html#cfn-mediapackage-packaginggroup-authorization-secretsrolearn}
   */
  SecretsRoleArn: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-logconfiguration.html}
 */
export type LogConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-logconfiguration.html#cfn-mediapackage-packaginggroup-logconfiguration-loggroupname}
   */
  LogGroupName?: Resolvable<string>;
};
