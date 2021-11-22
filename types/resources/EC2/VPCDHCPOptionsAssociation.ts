// CloudFormation Resource AWS::EC2::VPCDHCPOptionsAssociation

import { CfnResource, Resolvable } from '../../base';

export type VPCDHCPOptionsAssociation_Type =
  'AWS::EC2::VPCDHCPOptionsAssociation';
export const VPCDHCPOptionsAssociation_Type =
  'AWS::EC2::VPCDHCPOptionsAssociation';

/**
 * Resource Type definition for AWS::EC2::VPCDHCPOptionsAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html}
 */
export default function VPCDHCPOptionsAssociation(
  props: VPCDHCPOptionsAssociation_Properties
) {
  return new CfnResource<VPCDHCPOptionsAssociation_Properties>(
    VPCDHCPOptionsAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPCDHCPOptionsAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html}
 */
export type VPCDHCPOptionsAssociation_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html#cfn-ec2-vpcdhcpoptionsassociation-dhcpoptionsid}
   */
  DhcpOptionsId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-dhcp-options-assoc.html#cfn-ec2-vpcdhcpoptionsassociation-vpcid}
   */
  VpcId: Resolvable<string>;
};
