// CloudFormation Resource AWS::EC2::NetworkAclEntry

import { CFResource } from '../../base';

export type NetworkAclEntry_Type = 'AWS::EC2::NetworkAclEntry';
export const NetworkAclEntry_Type = 'AWS::EC2::NetworkAclEntry';

/**
 * Resource Type definition for AWS::EC2::NetworkAclEntry {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html}
 */
export default function NetworkAclEntry(props: NetworkAclEntry_Properties) {
  return new CFResource<NetworkAclEntry_Type, NetworkAclEntry_Properties>(
    NetworkAclEntry_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::NetworkAclEntry {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html}
 */
export type NetworkAclEntry_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-portrange}
   */
  PortRange?: PortRange;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-networkaclid}
   */
  NetworkAclId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-ruleaction}
   */
  RuleAction: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-cidrblock}
   */
  CidrBlock?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-egress}
   */
  Egress?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-rulenumber}
   */
  RuleNumber: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-ipv6cidrblock}
   */
  Ipv6CidrBlock?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-protocol}
   */
  Protocol: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html#cfn-ec2-networkaclentry-icmp}
   */
  Icmp?: Icmp;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-portrange.html}
 */
export type PortRange = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-portrange.html#cfn-ec2-networkaclentry-portrange-from}
   */
  From?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-portrange.html#cfn-ec2-networkaclentry-portrange-to}
   */
  To?: number;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-icmp.html}
 */
export type Icmp = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-icmp.html#cfn-ec2-networkaclentry-icmp-code}
   */
  Code?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-icmp.html#cfn-ec2-networkaclentry-icmp-type}
   */
  Type?: number;
};
