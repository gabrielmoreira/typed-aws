// CloudFormation Resource AWS::MediaPackage::Channel

import { CfnResource } from '../../base';

export type Channel_Type = 'AWS::MediaPackage::Channel';
export const Channel_Type = 'AWS::MediaPackage::Channel';

/**
 * Resource schema for AWS::MediaPackage::Channel {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html}
 */
export default function Channel(props: Channel_Properties) {
  return new CfnResource<Channel_Properties>(Channel_Type, props);
}

/**
 * Resource schema for AWS::MediaPackage::Channel {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html}
 */
export type Channel_Properties = {
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html#cfn-mediapackage-channel-id}
   */
  Id: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html#cfn-mediapackage-channel-description}
   */
  Description?: string;
  HlsIngest?: HlsIngest;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html#cfn-mediapackage-channel-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html#cfn-mediapackage-channel-egressaccesslogs}
   */
  EgressAccessLogs?: LogConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html#cfn-mediapackage-channel-ingressaccesslogs}
   */
  IngressAccessLogs?: LogConfiguration;
};

export type HlsIngest = {
  ingestEndpoints?: IngestEndpoint[];
};

export type IngestEndpoint = {
  Id?: string;
  Username?: string;
  Password?: string;
  Url?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-logconfiguration.html}
 */
export type LogConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-logconfiguration.html#cfn-mediapackage-channel-logconfiguration-loggroupname}
   */
  LogGroupName?: string;
};
