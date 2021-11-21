// CloudFormation Resource AWS::EC2::ClientVpnAuthorizationRule

import { CFResource } from '../../base';

export type ClientVpnAuthorizationRule_Type =
  'AWS::EC2::ClientVpnAuthorizationRule';
export const ClientVpnAuthorizationRule_Type =
  'AWS::EC2::ClientVpnAuthorizationRule';

/**
 * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html}
 */
export default function ClientVpnAuthorizationRule(
  props: ClientVpnAuthorizationRule_Properties
) {
  return new CFResource<
    ClientVpnAuthorizationRule_Type,
    ClientVpnAuthorizationRule_Properties
  >(ClientVpnAuthorizationRule_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html}
 */
export type ClientVpnAuthorizationRule_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-clientvpnendpointid}
   */
  ClientVpnEndpointId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-accessgroupid}
   */
  AccessGroupId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-targetnetworkcidr}
   */
  TargetNetworkCidr: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-authorizeallgroups}
   */
  AuthorizeAllGroups?: boolean;
};
