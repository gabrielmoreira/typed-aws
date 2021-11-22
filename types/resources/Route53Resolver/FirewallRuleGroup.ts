// CloudFormation Resource AWS::Route53Resolver::FirewallRuleGroup

import { CfnResource, Resolvable } from '../../base';

export type FirewallRuleGroup_Type = 'AWS::Route53Resolver::FirewallRuleGroup';
export const FirewallRuleGroup_Type = 'AWS::Route53Resolver::FirewallRuleGroup';

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html}
 */
export default function FirewallRuleGroup(props: FirewallRuleGroup_Properties) {
  return new CfnResource<FirewallRuleGroup_Properties>(
    FirewallRuleGroup_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html}
 */
export type FirewallRuleGroup_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-name}
   */
  Name?: Resolvable<string>;
  RuleCount?: Resolvable<number>;
  Status?: Resolvable<
    'COMPLETE' | 'DELETING' | 'UPDATING' | 'INACTIVE_OWNER_ACCOUNT_CLOSED'
  >;
  StatusMessage?: Resolvable<string>;
  OwnerId?: Resolvable<string>;
  ShareStatus?: Resolvable<'NOT_SHARED' | 'SHARED_WITH_ME' | 'SHARED_BY_ME'>;
  CreatorRequestId?: Resolvable<string>;
  CreationTime?: Resolvable<string>;
  ModificationTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-firewallrules}
   */
  FirewallRules?: FirewallRule[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-tags}
   */
  Tags?: Tag[];
};

/**
 * Firewall Rule associating the Rule Group to a Domain List {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html}
 */
export type FirewallRule = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-firewalldomainlistid}
   */
  FirewallDomainListId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-priority}
   */
  Priority: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-action}
   */
  Action: Resolvable<'ALLOW' | 'BLOCK' | 'ALERT'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockresponse}
   */
  BlockResponse?: Resolvable<'NODATA' | 'NXDOMAIN' | 'OVERRIDE'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridedomain}
   */
  BlockOverrideDomain?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridednstype}
   */
  BlockOverrideDnsType?: Resolvable<'CNAME'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridettl}
   */
  BlockOverrideTtl?: Resolvable<number>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
