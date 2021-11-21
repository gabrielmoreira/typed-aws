// CloudFormation Resource AWS::Route53Resolver::FirewallDomainList

import { CFResource } from '../../base';

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
  return new CFResource<FirewallDomainList_Type, FirewallDomainList_Properties>(
    FirewallDomainList_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::FirewallDomainList. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html}
 */
export type FirewallDomainList_Properties = {
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-name}
   */
  Name?: string;
  DomainCount?: number;
  Status?:
    | 'COMPLETE'
    | 'DELETING'
    | 'UPDATING'
    | 'COMPLETE_IMPORT_FAILED'
    | 'IMPORTING'
    | 'INACTIVE_OWNER_ACCOUNT_CLOSED';
  StatusMessage?: string;
  ManagedOwnerName?: string;
  CreatorRequestId?: string;
  CreationTime?: string;
  ModificationTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-domains}
   */
  Domains?: Domains;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-domainfileurl}
   */
  DomainFileUrl?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-tags}
   */
  Tags?: Tag[];
};

export type Domains = string[];

export type Tag = {
  Key: string;
  Value: string;
};
