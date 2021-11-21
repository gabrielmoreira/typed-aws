// CloudFormation Resource AWS::EC2::NetworkInsightsPath

import { CFResource } from '../../base';

export type NetworkInsightsPath_Type = 'AWS::EC2::NetworkInsightsPath';
export const NetworkInsightsPath_Type = 'AWS::EC2::NetworkInsightsPath';

/**
 * Resource schema for AWS::EC2::NetworkInsightsPath {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html}
 */
export default function NetworkInsightsPath(
  props: NetworkInsightsPath_Properties
) {
  return new CFResource<
    NetworkInsightsPath_Type,
    NetworkInsightsPath_Properties
  >(NetworkInsightsPath_Type, props);
}

/**
 * Resource schema for AWS::EC2::NetworkInsightsPath {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html}
 */
export type NetworkInsightsPath_Properties = {
  NetworkInsightsPathId?: string;
  NetworkInsightsPathArn?: string;
  CreatedDate?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-sourceip}
   */
  SourceIp?: IpAddress;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destinationip}
   */
  DestinationIp?: IpAddress;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-source}
   */
  Source: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destination}
   */
  Destination: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-protocol}
   */
  Protocol: Protocol;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destinationport}
   */
  DestinationPort?: Port;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-tags}
   */
  Tags?: Tag[];
};

export type Tags = Tag[];

export type Tag = {
  Key: string;
  Value?: string;
};

export type IpAddress = string;

export type Protocol = 'tcp' | 'udp';

export type Port = number;
