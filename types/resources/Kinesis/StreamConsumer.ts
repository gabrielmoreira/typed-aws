// CloudFormation Resource AWS::Kinesis::StreamConsumer

import { CfnResource } from '../../base';

export type StreamConsumer_Type = 'AWS::Kinesis::StreamConsumer';
export const StreamConsumer_Type = 'AWS::Kinesis::StreamConsumer';

/**
 * Resource Type definition for AWS::Kinesis::StreamConsumer {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html}
 */
export default function StreamConsumer(props: StreamConsumer_Properties) {
  return new CfnResource<StreamConsumer_Properties>(StreamConsumer_Type, props);
}

/**
 * Resource Type definition for AWS::Kinesis::StreamConsumer {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html}
 */
export type StreamConsumer_Properties = {
  Id?: string;
  ConsumerCreationTimestamp?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#cfn-kinesis-streamconsumer-consumername}
   */
  ConsumerName: string;
  ConsumerARN?: string;
  ConsumerStatus?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#cfn-kinesis-streamconsumer-streamarn}
   */
  StreamARN: string;
};
