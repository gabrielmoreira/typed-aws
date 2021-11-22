// CloudFormation Resource AWS::Route53Resolver::FirewallRuleGroupAssociation

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<FirewallRuleGroupAssociation_Properties>(
    FirewallRuleGroupAssociation_Type,
    props
  );
}

/**
 * Resource schema for
 * AWS::Route53Resolver::FirewallRuleGroupAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html}
 */
export type FirewallRuleGroupAssociation_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-firewallrulegroupid}
   */
  FirewallRuleGroupId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-vpcid}
   */
  VpcId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-priority}
   */
  Priority: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-mutationprotection}
   */
  MutationProtection?: Resolvable<'ENABLED' | 'DISABLED'>;
  ManagedOwnerName?: Resolvable<string>;
  Status?: Resolvable<
    'COMPLETE' | 'DELETING' | 'UPDATING' | 'INACTIVE_OWNER_ACCOUNT_CLOSED'
  >;
  StatusMessage?: Resolvable<string>;
  CreatorRequestId?: Resolvable<string>;
  CreationTime?: Resolvable<string>;
  ModificationTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
