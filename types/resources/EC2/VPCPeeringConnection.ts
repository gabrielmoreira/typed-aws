// CloudFormation Resource AWS::EC2::VPCPeeringConnection

import { CfnResource, Resolvable } from '../../base';

export type VPCPeeringConnection_Type = 'AWS::EC2::VPCPeeringConnection';
export const VPCPeeringConnection_Type = 'AWS::EC2::VPCPeeringConnection';

/**
 * Resource Type definition for AWS::EC2::VPCPeeringConnection {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html}
 */
export default function VPCPeeringConnection(
  props: VPCPeeringConnection_Properties
) {
  return new CfnResource<VPCPeeringConnection_Properties>(
    VPCPeeringConnection_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPCPeeringConnection {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html}
 */
export type VPCPeeringConnection_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#cfn-ec2-vpcpeeringconnection-peerownerid}
   */
  PeerOwnerId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#cfn-ec2-vpcpeeringconnection-peerregion}
   */
  PeerRegion?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#cfn-ec2-vpcpeeringconnection-peerrolearn}
   */
  PeerRoleArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#cfn-ec2-vpcpeeringconnection-peervpcid}
   */
  PeerVpcId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#cfn-ec2-vpcpeeringconnection-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcpeeringconnection.html#cfn-ec2-vpcpeeringconnection-vpcid}
   */
  VpcId: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
