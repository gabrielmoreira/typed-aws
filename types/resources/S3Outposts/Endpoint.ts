// CloudFormation Resource AWS::S3Outposts::Endpoint

import { CfnResource, Resolvable } from '../../base';

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
  Arn?: Resolvable<string>;
  CidrBlock?: Resolvable<string>;
  CreationTime?: iso8601UTC;
  Id?: Resolvable<string>;
  NetworkInterfaces?: NetworkInterface[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-outpostid}
   */
  OutpostId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-securitygroupid}
   */
  SecurityGroupId: Resolvable<string>;
  Status?: Resolvable<'Available' | 'Pending' | 'Deleting'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-subnetid}
   */
  SubnetId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-accesstype}
   */
  AccessType?: Resolvable<'CustomerOwnedIp' | 'Private'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-customerownedipv4pool}
   */
  CustomerOwnedIpv4Pool?: Resolvable<string>;
};

export type iso8601UTC = Resolvable<string>;

/**
 * The container for the network interface. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html}
 */
export type NetworkInterface = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html#cfn-s3outposts-endpoint-networkinterface-networkinterfaceid}
   */
  NetworkInterfaceId: Resolvable<string>;
};
