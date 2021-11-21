// CloudFormation Resource AWS::Route53Resolver::FirewallRuleGroupAssociation

import { CFResource } from '../../base';

export type FirewallRuleGroupAssociation_Type =
  'AWS::Route53Resolver::FirewallRuleGroupAssociation';
export const FirewallRuleGroupAssociation_Type =
  'AWS::Route53Resolver::FirewallRuleGroupAssociation';

/**
 * Resource schema for
 * AWS::Route53Resolver::FirewallRuleGroupAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html}
 */
export default function FirewallRuleGroupAssociation(
  props: FirewallRuleGroupAssociation_Properties
) {
  return new CFResource<
    FirewallRuleGroupAssociation_Type,
    FirewallRuleGroupAssociation_Properties
  >(FirewallRuleGroupAssociation_Type, props);
}

/**
 * Resource schema for
 * AWS::Route53Resolver::FirewallRuleGroupAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html}
 */
export type FirewallRuleGroupAssociation_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-firewallrulegroupid}
   */
  FirewallRuleGroupId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-vpcid}
   */
  VpcId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-priority}
   */
  Priority: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-mutationprotection}
   */
  MutationProtection?: 'ENABLED' | 'DISABLED';
  ManagedOwnerName?: string;
  Status?:
    | 'COMPLETE'
    | 'DELETING'
    | 'UPDATING'
    | 'INACTIVE_OWNER_ACCOUNT_CLOSED';
  StatusMessage?: string;
  CreatorRequestId?: string;
  CreationTime?: string;
  ModificationTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
