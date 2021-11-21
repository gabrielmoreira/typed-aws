// CloudFormation Resource AWS::Route53::HostedZone

import { CFResource } from '../../base';

export type HostedZone_Type = 'AWS::Route53::HostedZone';
export const HostedZone_Type = 'AWS::Route53::HostedZone';

/**
 * Resource schema for AWS::Route53::HostedZone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html}
 */
export default function HostedZone(props: HostedZone_Properties) {
  return new CFResource<HostedZone_Type, HostedZone_Properties>(
    HostedZone_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53::HostedZone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html}
 */
export type HostedZone_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-hostedzoneconfig}
   */
  HostedZoneConfig?: HostedZoneConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-hostedzonetags}
   */
  HostedZoneTags?: HostedZoneTag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-queryloggingconfig}
   */
  QueryLoggingConfig?: QueryLoggingConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-vpcs}
   */
  VPCs?: VPC[];
  NameServers?: string[];
};

/**
 * A complex type that contains an optional comment. If you don't want to
 * specify a comment, omit the HostedZoneConfig and Comment elements.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html}
 */
export type HostedZoneConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html#cfn-route53-hostedzone-hostedzoneconfig-comment}
   */
  Comment?: string;
};

/**
 * A complex type that contains information about a tag that you want to
 * add or edit for the specified health check or hosted zone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html}
 */
export type HostedZoneTag = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html#cfn-route53-hostedzone-hostedzonetag-key}
   */
  Key: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html#cfn-route53-hostedzone-hostedzonetag-value}
   */
  Value: string;
};

/**
 * A complex type that contains information about a configuration for DNS
 * query logging. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html}
 */
export type QueryLoggingConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html#cfn-route53-hostedzone-queryloggingconfig-cloudwatchlogsloggrouparn}
   */
  CloudWatchLogsLogGroupArn: string;
};

/**
 * A complex type that contains information about an Amazon VPC. Route 53
 * Resolver uses the records in the private hosted zone to route traffic
 * in that VPC. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html}
 */
export type VPC = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html#cfn-route53-hostedzone-vpc-vpcid}
   */
  VPCId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html#cfn-route53-hostedzone-vpc-vpcregion}
   */
  VPCRegion: string;
};
