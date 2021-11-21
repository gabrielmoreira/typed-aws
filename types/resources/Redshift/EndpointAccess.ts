// CloudFormation Resource AWS::Redshift::EndpointAccess

import { CFResource } from '../../base';

export type EndpointAccess_Type = 'AWS::Redshift::EndpointAccess';
export const EndpointAccess_Type = 'AWS::Redshift::EndpointAccess';

/**
 * Resource schema for a Redshift-managed VPC endpoint. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export default function EndpointAccess(props: EndpointAccess_Properties) {
  return new CFResource<EndpointAccess_Type, EndpointAccess_Properties>(
    EndpointAccess_Type,
    props
  );
}

/**
 * Resource schema for a Redshift-managed VPC endpoint. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html}
 */
export type EndpointAccess_Properties = {
  Address?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-clusteridentifier}
   */
  ClusterIdentifier?: string;
  VpcSecurityGroups?: VpcSecurityGroup[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-resourceowner}
   */
  ResourceOwner?: string;
  EndpointStatus?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-endpointname}
   */
  EndpointName: string;
  EndpointCreateTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-subnetgroupname}
   */
  SubnetGroupName?: string;
  Port?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-vpcsecuritygroupids}
   */
  VpcSecurityGroupIds: string[];
  VpcEndpoint?: {
    VpcEndpointId?: string;
    VpcId?: string;
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
  VpcSecurityGroupId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html#cfn-redshift-endpointaccess-vpcsecuritygroup-status}
   */
  Status?: string;
};

export type NetworkInterface = {
  NetworkInterfaceId?: string;
  SubnetId?: string;
  PrivateIpAddress?: string;
  AvailabilityZone?: string;
};
