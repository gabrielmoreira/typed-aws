// CloudFormation Resource AWS::Route53Resolver::FirewallRuleGroup

import { CFResource } from '../../base';

export type FirewallRuleGroup_Type = 'AWS::Route53Resolver::FirewallRuleGroup';
export const FirewallRuleGroup_Type = 'AWS::Route53Resolver::FirewallRuleGroup';

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html}
 */
export default function FirewallRuleGroup(props: FirewallRuleGroup_Properties) {
  return new CFResource<FirewallRuleGroup_Type, FirewallRuleGroup_Properties>(
    FirewallRuleGroup_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::FirewallRuleGroup. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html}
 */
export type FirewallRuleGroup_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-name}
   */
  Name?: string;
  RuleCount?: number;
  Status?:
    | 'COMPLETE'
    | 'DELETING'
    | 'UPDATING'
    | 'INACTIVE_OWNER_ACCOUNT_CLOSED';
  StatusMessage?: string;
  OwnerId?: string;
  ShareStatus?: 'NOT_SHARED' | 'SHARED_WITH_ME' | 'SHARED_BY_ME';
  CreatorRequestId?: string;
  CreationTime?: string;
  ModificationTime?: string;
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
  FirewallDomainListId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-priority}
   */
  Priority: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-action}
   */
  Action: 'ALLOW' | 'BLOCK' | 'ALERT';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockresponse}
   */
  BlockResponse?: 'NODATA' | 'NXDOMAIN' | 'OVERRIDE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridedomain}
   */
  BlockOverrideDomain?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridednstype}
   */
  BlockOverrideDnsType?: 'CNAME';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridettl}
   */
  BlockOverrideTtl?: number;
};

export type Tag = {
  Key: string;
  Value: string;
};
