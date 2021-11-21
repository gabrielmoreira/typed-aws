// CloudFormation Resource AWS::EC2::NetworkAcl

import { CFResource } from '../../base';

export type NetworkAcl_Type = 'AWS::EC2::NetworkAcl';
export const NetworkAcl_Type = 'AWS::EC2::NetworkAcl';

/**
 * Resource Type definition for AWS::EC2::NetworkAcl {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html}
 */
export default function NetworkAcl(props: NetworkAcl_Properties) {
  return new CFResource<NetworkAcl_Type, NetworkAcl_Properties>(
    NetworkAcl_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::NetworkAcl {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html}
 */
export type NetworkAcl_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html#cfn-ec2-networkacl-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkacl.html#cfn-ec2-networkacl-vpcid}
   */
  VpcId: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
