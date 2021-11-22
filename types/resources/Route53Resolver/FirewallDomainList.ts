// CloudFormation Resource AWS::Route53Resolver::FirewallDomainList

import { CfnResource, Resolvable } from '../../base';

export type FirewallDomainList_Type =
  'AWS::Route53Resolver::FirewallDomainList';
export const FirewallDomainList_Type =
  'AWS::Route53Resolver::FirewallDomainList';

/**
 * Resource schema for AWS::Route53Resolver::FirewallDomainList. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html}
 */
export default function FirewallDomainList(
  props: FirewallDomainList_Properties
) {
  return new CfnResource<FirewallDomainList_Properties>(
    FirewallDomainList_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::FirewallDomainList. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html}
 */
export type FirewallDomainList_Properties = {
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-name}
   */
  Name?: Resolvable<string>;
  DomainCount?: Resolvable<number>;
  Status?: Resolvable<
    | 'COMPLETE'
    | 'DELETING'
    | 'UPDATING'
    | 'COMPLETE_IMPORT_FAILED'
    | 'IMPORTING'
    | 'INACTIVE_OWNER_ACCOUNT_CLOSED'
  >;
  StatusMessage?: Resolvable<string>;
  ManagedOwnerName?: Resolvable<string>;
  CreatorRequestId?: Resolvable<string>;
  CreationTime?: Resolvable<string>;
  ModificationTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-domains}
   */
  Domains?: Domains;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-domainfileurl}
   */
  DomainFileUrl?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-tags}
   */
  Tags?: Tag[];
};

export type Domains = Resolvable<string>[];

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
