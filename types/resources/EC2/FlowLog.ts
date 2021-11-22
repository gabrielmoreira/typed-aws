// CloudFormation Resource AWS::EC2::FlowLog

import { CfnResource, Resolvable } from '../../base';

export type FlowLog_Type = 'AWS::EC2::FlowLog';
export const FlowLog_Type = 'AWS::EC2::FlowLog';

/**
 * Specifies a VPC flow log, which enables you to capture IP traffic for
 * a specific network interface, subnet, or VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html}
 */
export default function FlowLog(props: FlowLog_Properties) {
  return new CfnResource<FlowLog_Properties>(FlowLog_Type, props);
}

/**
 * Specifies a VPC flow log, which enables you to capture IP traffic for
 * a specific network interface, subnet, or VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html}
 */
export type FlowLog_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-deliverlogspermissionarn}
   */
  DeliverLogsPermissionArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logdestination}
   */
  LogDestination?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logdestinationtype}
   */
  LogDestinationType?: Resolvable<'cloud-watch-logs' | 's3'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logformat}
   */
  LogFormat?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-loggroupname}
   */
  LogGroupName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-maxaggregationinterval}
   */
  MaxAggregationInterval?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-resourceid}
   */
  ResourceId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-resourcetype}
   */
  ResourceType: Resolvable<'NetworkInterface' | 'Subnet' | 'VPC'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-traffictype}
   */
  TrafficType: Resolvable<'ACCEPT' | 'ALL' | 'REJECT'>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
