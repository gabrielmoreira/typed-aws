// CloudFormation Resource AWS::EC2::VPCEndpointService

import { CfnResource, Resolvable } from '../../base';

export type VPCEndpointService_Type = 'AWS::EC2::VPCEndpointService';
export const VPCEndpointService_Type = 'AWS::EC2::VPCEndpointService';

/**
 * Resource Type definition for AWS::EC2::VPCEndpointService {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html}
 */
export default function VPCEndpointService(
  props: VPCEndpointService_Properties
) {
  return new CfnResource<VPCEndpointService_Properties>(
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
  NetworkLoadBalancerArns?: Resolvable<string>[];
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-acceptancerequired}
   */
  AcceptanceRequired?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-gatewayloadbalancerarns}
   */
  GatewayLoadBalancerArns?: Resolvable<string>[];
};
