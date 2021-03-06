// CloudFormation Resource AWS::Kinesis::Stream

import { CfnResource, Resolvable } from '../../base';

export type Stream_Type = 'AWS::Kinesis::Stream';
export const Stream_Type = 'AWS::Kinesis::Stream';

/**
 * Resource Type definition for AWS::Kinesis::Stream {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 */
export default function Stream(props: Stream_Properties) {
  return new CfnResource<Stream_Properties>(Stream_Type, props);
}

/**
 * Resource Type definition for AWS::Kinesis::Stream {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html}
 */
export type Stream_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-retentionperiodhours}
   */
  RetentionPeriodHours?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-shardcount}
   */
  ShardCount: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-streamencryption}
   */
  StreamEncryption?: StreamEncryption;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-tags}
   */
  Tags?: Tag[];
};

/**
 * When specified, enables or updates server-side encryption using an AWS
 * KMS key for a specified stream. Removing this property from your stack
 * template and updating your stack disables encryption. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html}
 */
export type StreamEncryption = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html#cfn-kinesis-stream-streamencryption-encryptiontype}
   */
  EncryptionType: Resolvable<'KMS'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html#cfn-kinesis-stream-streamencryption-keyid}
   */
  KeyId: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
