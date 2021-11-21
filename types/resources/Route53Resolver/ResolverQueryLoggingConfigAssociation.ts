// CloudFormation Resource AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation

import { CFResource } from '../../base';

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
  return new CFResource<
    ResolverQueryLoggingConfigAssociation_Type,
    ResolverQueryLoggingConfigAssociation_Properties
  >(ResolverQueryLoggingConfigAssociation_Type, props);
}

/**
 * Resource schema for
 * AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html}
 */
export type ResolverQueryLoggingConfigAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#cfn-route53resolver-resolverqueryloggingconfigassociation-resolverquerylogconfigid}
   */
  ResolverQueryLogConfigId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#cfn-route53resolver-resolverqueryloggingconfigassociation-resourceid}
   */
  ResourceId?: string;
  Status?:
    | 'CREATING'
    | 'ACTIVE'
    | 'ACTION_NEEDED'
    | 'DELETING'
    | 'FAILED'
    | 'OVERRIDDEN';
  Error?: 'NONE' | 'DESTINATION_NOT_FOUND' | 'ACCESS_DENIED';
  ErrorMessage?: string;
  CreationTime?: string;
};
