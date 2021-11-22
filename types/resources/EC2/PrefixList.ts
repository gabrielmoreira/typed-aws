// CloudFormation Resource AWS::EC2::PrefixList

import { CfnResource, Resolvable } from '../../base';

export type PrefixList_Type = 'AWS::EC2::PrefixList';
export const PrefixList_Type = 'AWS::EC2::PrefixList';

/**
 * Resource schema of AWS::EC2::PrefixList Type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html}
 */
export default function PrefixList(props: PrefixList_Properties) {
  return new CfnResource<PrefixList_Properties>(PrefixList_Type, props);
}

/**
 * Resource schema of AWS::EC2::PrefixList Type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html}
 */
export type PrefixList_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-prefixlistname}
   */
  PrefixListName: Resolvable<string>;
  PrefixListId?: Resolvable<string>;
  OwnerId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-addressfamily}
   */
  AddressFamily: Resolvable<'IPv4' | 'IPv6'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-maxentries}
   */
  MaxEntries: Resolvable<number>;
  Version?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-entries}
   */
  Entries?: Entry[];
  Arn?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-entry.html}
 */
export type Entry = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-entry.html#cfn-ec2-prefixlist-entry-cidr}
   */
  Cidr: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-entry.html#cfn-ec2-prefixlist-entry-description}
   */
  Description?: Resolvable<string>;
};
