// CloudFormation Resource AWS::EC2::VPCEndpointService

import { CFResource } from '../../base';

export type VPCEndpointService_Type = 'AWS::EC2::VPCEndpointService';
export const VPCEndpointService_Type = 'AWS::EC2::VPCEndpointService';

/**
 * Resource Type definition for AWS::EC2::VPCEndpointService {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html}
 */
export default function VPCEndpointService(
  props: VPCEndpointService_Properties
) {
  return new CFResource<VPCEndpointService_Type, VPCEndpointService_Properties>(
    VPCEndpointService_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPCEndpointService {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html}
 */
export type VPCEndpointService_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-networkloadbalancerarns}
   */
  NetworkLoadBalancerArns?: string[];
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-acceptancerequired}
   */
  AcceptanceRequired?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-gatewayloadbalancerarns}
   */
  GatewayLoadBalancerArns?: string[];
};
