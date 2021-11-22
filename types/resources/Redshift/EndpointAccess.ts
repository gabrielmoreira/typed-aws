// CloudFormation Resource AWS::Redshift::EndpointAccess

import { CfnResource, Resolvable } from '../../base';

export type EndpointAccess_Type = 'AWS::Redshift::EndpointAccess';
export const EndpointAccess_Type = 'AWS::Redshift::EndpointAccess';

/**
 * Resource schema for a Redshift-managed VPC endpoint. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export default function EndpointAccess(props: EndpointAccess_Properties) {
  return new CfnResource<EndpointAccess_Properties>(EndpointAccess_Type, props);
}

/**
 * Resource schema for a Redshift-managed VPC endpoint. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export type EndpointAccess_Properties = {
  Address?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-clusteridentifier}
   */
  ClusterIdentifier?: Resolvable<string>;
  VpcSecurityGroups?: VpcSecurityGroup[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-resourceowner}
   */
  ResourceOwner?: Resolvable<string>;
  EndpointStatus?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-endpointname}
   */
  EndpointName: Resolvable<string>;
  EndpointCreateTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-subnetgroupname}
   */
  SubnetGroupName?: Resolvable<string>;
  Port?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-vpcsecuritygroupids}
   */
  VpcSecurityGroupIds: Resolvable<string>[];
  VpcEndpoint?: {
    VpcEndpointId?: Resolvable<string>;
    VpcId?: Resolvable<string>;
    NetworkInterfaces?: NetworkInterface[];
  };
};

/**
 * Describes the members of a VPC security group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html}
 */
export type VpcSecurityGroup = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html#cfn-redshift-endpointaccess-vpcsecuritygroup-vpcsecuritygroupid}
   */
  VpcSecurityGroupId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html#cfn-redshift-endpointaccess-vpcsecuritygroup-status}
   */
  Status?: Resolvable<string>;
};

export type NetworkInterface = {
  NetworkInterfaceId?: Resolvable<string>;
  SubnetId?: Resolvable<string>;
  PrivateIpAddress?: Resolvable<string>;
  AvailabilityZone?: Resolvable<string>;
};
