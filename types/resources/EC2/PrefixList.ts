// CloudFormation Resource AWS::EC2::PrefixList

import { CFResource } from '../../base';

export type PrefixList_Type = 'AWS::EC2::PrefixList';
export const PrefixList_Type = 'AWS::EC2::PrefixList';

/**
 * Resource schema of AWS::EC2::PrefixList Type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html}
 */
export default function PrefixList(props: PrefixList_Properties) {
  return new CFResource<PrefixList_Type, PrefixList_Properties>(
    PrefixList_Type,
    props
  );
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
  PrefixListName: string;
  PrefixListId?: string;
  OwnerId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-addressfamily}
   */
  AddressFamily: 'IPv4' | 'IPv6';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-prefixlist.html#cfn-ec2-prefixlist-maxentries}
   */
  MaxEntries: number;
  Version?: number;
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
  Arn?: string;
};

export type Tag = {
  Key: string;
  Value?: string;
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
  Cidr: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-prefixlist-entry.html#cfn-ec2-prefixlist-entry-description}
   */
  Description?: string;
};
