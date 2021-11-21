// CloudFormation Resource AWS::EC2::VPCEndpoint

import { CFResource } from '../../base';

export type VPCEndpoint_Type = 'AWS::EC2::VPCEndpoint';
export const VPCEndpoint_Type = 'AWS::EC2::VPCEndpoint';

/**
 * Resource Type definition for AWS::EC2::VPCEndpoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 */
export default function VPCEndpoint(props: VPCEndpoint_Properties) {
  return new CFResource<VPCEndpoint_Type, VPCEndpoint_Properties>(
    VPCEndpoint_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPCEndpoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 */
export type VPCEndpoint_Properties = {
  Id?: string;
  CreationTimestamp?: string;
  DnsEntries?: string[];
  NetworkInterfaceIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-policydocument}
   */
  PolicyDocument?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-privatednsenabled}
   */
  PrivateDnsEnabled?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-routetableids}
   */
  RouteTableIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-securitygroupids}
   */
  SecurityGroupIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-servicename}
   */
  ServiceName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-subnetids}
   */
  SubnetIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-vpcendpointtype}
   */
  VpcEndpointType?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-vpcid}
   */
  VpcId: string;
};
