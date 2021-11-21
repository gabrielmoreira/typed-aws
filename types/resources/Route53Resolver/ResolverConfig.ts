// CloudFormation Resource AWS::Route53Resolver::ResolverConfig

import { CFResource } from '../../base';

export type ResolverConfig_Type = 'AWS::Route53Resolver::ResolverConfig';
export const ResolverConfig_Type = 'AWS::Route53Resolver::ResolverConfig';

/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html}
 */
export default function ResolverConfig(props: ResolverConfig_Properties) {
  return new CFResource<ResolverConfig_Type, ResolverConfig_Properties>(
    ResolverConfig_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html}
 */
export type ResolverConfig_Properties = {
  Id?: string;
  OwnerId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-resourceid}
   */
  ResourceId: string;
  AutodefinedReverse?: 'ENABLING' | 'ENABLED' | 'DISABLING' | 'DISABLED';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-autodefinedreverseflag}
   */
  AutodefinedReverseFlag: 'DISABLE';
};
