// CloudFormation Resource AWS::EC2::ClientVpnTargetNetworkAssociation

import { CfnResource } from '../../base';

export type ClientVpnTargetNetworkAssociation_Type =
  'AWS::EC2::ClientVpnTargetNetworkAssociation';
export const ClientVpnTargetNetworkAssociation_Type =
  'AWS::EC2::ClientVpnTargetNetworkAssociation';

/**
 * Resource Type definition for
 * AWS::EC2::ClientVpnTargetNetworkAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html}
 */
export default function ClientVpnTargetNetworkAssociation(
  props: ClientVpnTargetNetworkAssociation_Properties
) {
  return new CfnResource<ClientVpnTargetNetworkAssociation_Properties>(
    ClientVpnTargetNetworkAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::EC2::ClientVpnTargetNetworkAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html}
 */
export type ClientVpnTargetNetworkAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html#cfn-ec2-clientvpntargetnetworkassociation-clientvpnendpointid}
   */
  ClientVpnEndpointId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpntargetnetworkassociation.html#cfn-ec2-clientvpntargetnetworkassociation-subnetid}
   */
  SubnetId: string;
};
