// CloudFormation Resource AWS::EC2::SubnetNetworkAclAssociation

import { CFResource } from '../../base';

export type SubnetNetworkAclAssociation_Type =
  'AWS::EC2::SubnetNetworkAclAssociation';
export const SubnetNetworkAclAssociation_Type =
  'AWS::EC2::SubnetNetworkAclAssociation';

/**
 * Resource Type definition for AWS::EC2::SubnetNetworkAclAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html}
 */
export default function SubnetNetworkAclAssociation(
  props: SubnetNetworkAclAssociation_Properties
) {
  return new CFResource<
    SubnetNetworkAclAssociation_Type,
    SubnetNetworkAclAssociation_Properties
  >(SubnetNetworkAclAssociation_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::SubnetNetworkAclAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html}
 */
export type SubnetNetworkAclAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html#cfn-ec2-subnetnetworkaclassociation-associationid}
   */
  SubnetId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet-network-acl-assoc.html#cfn-ec2-subnetnetworkaclassociation-networkaclid}
   */
  NetworkAclId: string;
  AssociationId?: string;
};
