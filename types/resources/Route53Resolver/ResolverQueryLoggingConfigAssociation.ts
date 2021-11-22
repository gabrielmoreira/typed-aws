// CloudFormation Resource AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation

import { CfnResource, Resolvable } from '../../base';

export type ResolverQueryLoggingConfigAssociation_Type =
  'AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation';
export const ResolverQueryLoggingConfigAssociation_Type =
  'AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation';

/**
 * Resource schema for
 * AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html}
 */
export default function ResolverQueryLoggingConfigAssociation(
  props: ResolverQueryLoggingConfigAssociation_Properties
) {
  return new CfnResource<ResolverQueryLoggingConfigAssociation_Properties>(
    ResolverQueryLoggingConfigAssociation_Type,
    props
  );
}

/**
 * Resource schema for
 * AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html}
 */
export type ResolverQueryLoggingConfigAssociation_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#cfn-route53resolver-resolverqueryloggingconfigassociation-resolverquerylogconfigid}
   */
  ResolverQueryLogConfigId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#cfn-route53resolver-resolverqueryloggingconfigassociation-resourceid}
   */
  ResourceId?: Resolvable<string>;
  Status?: Resolvable<
    | 'CREATING'
    | 'ACTIVE'
    | 'ACTION_NEEDED'
    | 'DELETING'
    | 'FAILED'
    | 'OVERRIDDEN'
  >;
  Error?: Resolvable<'NONE' | 'DESTINATION_NOT_FOUND' | 'ACCESS_DENIED'>;
  ErrorMessage?: Resolvable<string>;
  CreationTime?: Resolvable<string>;
};
