// CloudFormation Resource AWS::Route53Resolver::ResolverDNSSECConfig

import { CfnResource } from '../../base';

export type ResolverDNSSECConfig_Type =
  'AWS::Route53Resolver::ResolverDNSSECConfig';
export const ResolverDNSSECConfig_Type =
  'AWS::Route53Resolver::ResolverDNSSECConfig';

/**
 * Resource schema for AWS::Route53Resolver::ResolverDNSSECConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html}
 */
export default function ResolverDNSSECConfig(
  props: ResolverDNSSECConfig_Properties
) {
  return new CfnResource<ResolverDNSSECConfig_Properties>(
    ResolverDNSSECConfig_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::ResolverDNSSECConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html}
 */
export type ResolverDNSSECConfig_Properties = {
  Id?: string;
  OwnerId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html#cfn-route53resolver-resolverdnssecconfig-resourceid}
   */
  ResourceId?: string;
  ValidationStatus?: 'ENABLING' | 'ENABLED' | 'DISABLING' | 'DISABLED';
};
