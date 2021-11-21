// CloudFormation Resource AWS::Config::DeliveryChannel

import { CfnResource } from '../../base';

export type DeliveryChannel_Type = 'AWS::Config::DeliveryChannel';
export const DeliveryChannel_Type = 'AWS::Config::DeliveryChannel';

/**
 * Resource Type definition for AWS::Config::DeliveryChannel {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html}
 */
export default function DeliveryChannel(props: DeliveryChannel_Properties) {
  return new CfnResource<DeliveryChannel_Properties>(
    DeliveryChannel_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Config::DeliveryChannel {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html}
 */
export type DeliveryChannel_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3keyprefix}
   */
  S3KeyPrefix?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties}
   */
  ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3bucketname}
   */
  S3BucketName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-snstopicarn}
   */
  SnsTopicARN?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3kmskeyarn}
   */
  S3KmsKeyArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-name}
   */
  Name?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html}
 */
export type ConfigSnapshotDeliveryProperties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties-deliveryfrequency}
   */
  DeliveryFrequency?: string;
};
