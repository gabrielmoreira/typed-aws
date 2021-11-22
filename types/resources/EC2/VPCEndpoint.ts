// CloudFormation Resource AWS::EC2::VPCEndpoint

import { CfnResource, Resolvable } from '../../base';

export type VPCEndpoint_Type = 'AWS::EC2::VPCEndpoint';
export const VPCEndpoint_Type = 'AWS::EC2::VPCEndpoint';

/**
 * Resource Type definition for AWS::EC2::VPCEndpoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 */
export default function VPCEndpoint(props: VPCEndpoint_Properties) {
  return new CfnResource<VPCEndpoint_Properties>(VPCEndpoint_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::VPCEndpoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html}
 */
export type VPCEndpoint_Properties = {
  Id?: Resolvable<string>;
  CreationTimestamp?: Resolvable<string>;
  DnsEntries?: Resolvable<string>[];
  NetworkInterfaceIds?: Resolvable<string>[];
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
  PrivateDnsEnabled?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-routetableids}
   */
  RouteTableIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-securitygroupids}
   */
  SecurityGroupIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-servicename}
   */
  ServiceName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-subnetids}
   */
  SubnetIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-vpcendpointtype}
   */
  VpcEndpointType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html#cfn-ec2-vpcendpoint-vpcid}
   */
  VpcId: Resolvable<string>;
};
