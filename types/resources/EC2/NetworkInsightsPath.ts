// CloudFormation Resource AWS::EC2::NetworkInsightsPath

import { CfnResource, Resolvable } from '../../base';

export type NetworkInsightsPath_Type = 'AWS::EC2::NetworkInsightsPath';
export const NetworkInsightsPath_Type = 'AWS::EC2::NetworkInsightsPath';

/**
 * Resource schema for AWS::EC2::NetworkInsightsPath {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html}
 */
export default function NetworkInsightsPath(
  props: NetworkInsightsPath_Properties
) {
  return new CfnResource<NetworkInsightsPath_Properties>(
    NetworkInsightsPath_Type,
    props
  );
}

/**
 * Resource schema for AWS::EC2::NetworkInsightsPath {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html}
 */
export type NetworkInsightsPath_Properties = {
  NetworkInsightsPathId?: Resolvable<string>;
  NetworkInsightsPathArn?: Resolvable<string>;
  CreatedDate?: Resolvable<string>;
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
  Source: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destination}
   */
  Destination: Resolvable<string>;
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
  Key: Resolvable<string>;
  Value?: Resolvable<string>;
};

export type IpAddress = Resolvable<string>;

export type Protocol = Resolvable<'tcp' | 'udp'>;

export type Port = Resolvable<number>;
