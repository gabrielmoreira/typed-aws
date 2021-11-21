// CloudFormation Resource AWS::EC2::FlowLog

import { CFResource } from '../../base';

export type FlowLog_Type = 'AWS::EC2::FlowLog';
export const FlowLog_Type = 'AWS::EC2::FlowLog';

/**
 * Specifies a VPC flow log, which enables you to capture IP traffic for
 * a specific network interface, subnet, or VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html}
 */
export default function FlowLog(props: FlowLog_Properties) {
  return new CFResource<FlowLog_Type, FlowLog_Properties>(FlowLog_Type, props);
}

/**
 * Specifies a VPC flow log, which enables you to capture IP traffic for
 * a specific network interface, subnet, or VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html}
 */
export type FlowLog_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-deliverlogspermissionarn}
   */
  DeliverLogsPermissionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logdestination}
   */
  LogDestination?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logdestinationtype}
   */
  LogDestinationType?: 'cloud-watch-logs' | 's3';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logformat}
   */
  LogFormat?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-loggroupname}
   */
  LogGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-maxaggregationinterval}
   */
  MaxAggregationInterval?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-resourceid}
   */
  ResourceId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-resourcetype}
   */
  ResourceType: 'NetworkInterface' | 'Subnet' | 'VPC';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-traffictype}
   */
  TrafficType: 'ACCEPT' | 'ALL' | 'REJECT';
};

export type Tag = {
  Value: string;
  Key: string;
};
