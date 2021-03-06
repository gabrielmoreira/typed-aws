// CloudFormation Resource AWS::WAFv2::IPSet

import { CfnResource, Resolvable } from '../../base';

export type IPSet_Type = 'AWS::WAFv2::IPSet';
export const IPSet_Type = 'AWS::WAFv2::IPSet';

/**
 * Contains a list of IP addresses. This can be either IPV4 or IPV6. The
 * list will be mutually {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html}
 */
export default function IPSet(props: IPSet_Properties) {
  return new CfnResource<IPSet_Properties>(IPSet_Type, props);
}

/**
 * Contains a list of IP addresses. This can be either IPV4 or IPV6. The
 * list will be mutually {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html}
 */
export type IPSet_Properties = {
  Arn?: ResourceArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-description}
   */
  Description?: EntityDescription;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-name}
   */
  Name?: EntityName;
  Id?: EntityId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-scope}
   */
  Scope: Scope;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-ipaddressversion}
   */
  IPAddressVersion: IPAddressVersion;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-addresses}
   */
  Addresses: IPAddress[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-tags}
   */
  Tags?: Tag[];
};

export type EntityName = Resolvable<string>;

export type EntityDescription = Resolvable<string>;

export type EntityId = Resolvable<string>;

export type Scope = Resolvable<'CLOUDFRONT' | 'REGIONAL'>;

export type IPAddressVersion = Resolvable<'IPV4' | 'IPV6'>;

export type IPAddress = Resolvable<string>;

export type ResourceArn = Resolvable<string>;

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};
