// CloudFormation Resource AWS::Route53Resolver::ResolverEndpoint

import { CfnResource } from '../../base';

export type ResolverEndpoint_Type = 'AWS::Route53Resolver::ResolverEndpoint';
export const ResolverEndpoint_Type = 'AWS::Route53Resolver::ResolverEndpoint';

/**
 * Resource Type definition for AWS::Route53Resolver::ResolverEndpoint
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export default function ResolverEndpoint(props: ResolverEndpoint_Properties) {
  return new CfnResource<ResolverEndpoint_Properties>(
    ResolverEndpoint_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Route53Resolver::ResolverEndpoint
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export type ResolverEndpoint_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-ipaddresses}
   */
  IpAddresses: IpAddressRequest[];
  ResolverEndpointId?: string;
  IpAddressCount?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-direction}
   */
  Direction: string;
  HostVPCId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-securitygroupids}
   */
  SecurityGroupIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-name}
   */
  Name?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html}
 */
export type IpAddressRequest = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-ip}
   */
  Ip?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-subnetid}
   */
  SubnetId: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
