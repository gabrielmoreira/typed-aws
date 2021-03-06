// CloudFormation Resource AWS::EC2::DHCPOptions

import { CfnResource, Resolvable } from '../../base';

export type DHCPOptions_Type = 'AWS::EC2::DHCPOptions';
export const DHCPOptions_Type = 'AWS::EC2::DHCPOptions';

/**
 * Resource Type definition for AWS::EC2::DHCPOptions {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html}
 */
export default function DHCPOptions(props: DHCPOptions_Properties) {
  return new CfnResource<DHCPOptions_Properties>(DHCPOptions_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::DHCPOptions {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html}
 */
export type DHCPOptions_Properties = {
  DhcpOptionsId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#cfn-ec2-dhcpoptions-domainname}
   */
  DomainName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#cfn-ec2-dhcpoptions-domainnameservers}
   */
  DomainNameServers?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#cfn-ec2-dhcpoptions-netbiosnameservers}
   */
  NetbiosNameServers?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#cfn-ec2-dhcpoptions-netbiosnodetype}
   */
  NetbiosNodeType?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#cfn-ec2-dhcpoptions-ntpservers}
   */
  NtpServers?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html#cfn-ec2-dhcpoptions-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
