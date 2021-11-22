// CloudFormation Resource AWS::Kinesis::StreamConsumer

import { CfnResource, Resolvable } from '../../base';

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
  Id?: Resolvable<string>;
  ConsumerCreationTimestamp?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#cfn-kinesis-streamconsumer-consumername}
   */
  ConsumerName: Resolvable<string>;
  ConsumerARN?: Resolvable<string>;
  ConsumerStatus?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#cfn-kinesis-streamconsumer-streamarn}
   */
  StreamARN: Resolvable<string>;
};
