// CloudFormation Resource AWS::EC2::CustomerGateway

import { CfnResource, Resolvable } from '../../base';

export type CustomerGateway_Type = 'AWS::EC2::CustomerGateway';
export const CustomerGateway_Type = 'AWS::EC2::CustomerGateway';

/**
 * Resource Type definition for AWS::EC2::CustomerGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html}
 */
export default function CustomerGateway(props: CustomerGateway_Properties) {
  return new CfnResource<CustomerGateway_Properties>(
    CustomerGateway_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::CustomerGateway {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html}
 */
export type CustomerGateway_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html#cfn-ec2-customergateway-bgpasn}
   */
  BgpAsn: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html#cfn-ec2-customergateway-ipaddress}
   */
  IpAddress: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html#cfn-ec2-customergateway-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html#cfn-ec2-customergateway-type}
   */
  Type: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
