// CloudFormation Resource AWS::EC2::ClientVpnAuthorizationRule

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<ClientVpnAuthorizationRule_Properties>(
    ClientVpnAuthorizationRule_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html}
 */
export type ClientVpnAuthorizationRule_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-clientvpnendpointid}
   */
  ClientVpnEndpointId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-accessgroupid}
   */
  AccessGroupId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-targetnetworkcidr}
   */
  TargetNetworkCidr: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-authorizeallgroups}
   */
  AuthorizeAllGroups?: Resolvable<boolean>;
};
