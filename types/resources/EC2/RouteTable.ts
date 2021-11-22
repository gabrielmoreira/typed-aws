// CloudFormation Resource AWS::EC2::RouteTable

import { CfnResource, Resolvable } from '../../base';

export type RouteTable_Type = 'AWS::EC2::RouteTable';
export const RouteTable_Type = 'AWS::EC2::RouteTable';

/**
 * Resource Type definition for AWS::EC2::RouteTable {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html}
 */
export default function RouteTable(props: RouteTable_Properties) {
  return new CfnResource<RouteTable_Properties>(RouteTable_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::RouteTable {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html}
 */
export type RouteTable_Properties = {
  RouteTableId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html#cfn-ec2-routetable-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routetable.html#cfn-ec2-routetable-vpcid}
   */
  VpcId: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
