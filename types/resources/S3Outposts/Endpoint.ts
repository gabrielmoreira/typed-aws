// CloudFormation Resource AWS::S3Outposts::Endpoint

import { CfnResource } from '../../base';

export type Endpoint_Type = 'AWS::S3Outposts::Endpoint';
export const Endpoint_Type = 'AWS::S3Outposts::Endpoint';

/**
 * Resource Type Definition for AWS::S3Outposts::Endpoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html}
 */
export default function Endpoint(props: Endpoint_Properties) {
  return new CfnResource<Endpoint_Properties>(Endpoint_Type, props);
}

/**
 * Resource Type Definition for AWS::S3Outposts::Endpoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html}
 */
export type Endpoint_Properties = {
  Arn?: string;
  CidrBlock?: string;
  CreationTime?: iso8601UTC;
  Id?: string;
  NetworkInterfaces?: NetworkInterface[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-outpostid}
   */
  OutpostId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-securitygroupid}
   */
  SecurityGroupId: string;
  Status?: 'Available' | 'Pending' | 'Deleting';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-subnetid}
   */
  SubnetId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-accesstype}
   */
  AccessType?: 'CustomerOwnedIp' | 'Private';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-customerownedipv4pool}
   */
  CustomerOwnedIpv4Pool?: string;
};

export type iso8601UTC = string;

/**
 * The container for the network interface. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html}
 */
export type NetworkInterface = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html#cfn-s3outposts-endpoint-networkinterface-networkinterfaceid}
   */
  NetworkInterfaceId: string;
};
