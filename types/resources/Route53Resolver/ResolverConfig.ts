// CloudFormation Resource AWS::Route53Resolver::ResolverConfig

import { CfnResource, Resolvable } from '../../base';

export type ResolverConfig_Type = 'AWS::Route53Resolver::ResolverConfig';
export const ResolverConfig_Type = 'AWS::Route53Resolver::ResolverConfig';

/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html}
 */
export default function ResolverConfig(props: ResolverConfig_Properties) {
  return new CfnResource<ResolverConfig_Properties>(ResolverConfig_Type, props);
}

/**
 * Resource schema for AWS::Route53Resolver::ResolverConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html}
 */
export type ResolverConfig_Properties = {
  Id?: Resolvable<string>;
  OwnerId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-resourceid}
   */
  ResourceId: Resolvable<string>;
  AutodefinedReverse?: Resolvable<
    'ENABLING' | 'ENABLED' | 'DISABLING' | 'DISABLED'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-autodefinedreverseflag}
   */
  AutodefinedReverseFlag: Resolvable<'DISABLE'>;
};
