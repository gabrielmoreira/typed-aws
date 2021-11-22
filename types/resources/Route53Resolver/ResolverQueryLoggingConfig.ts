// CloudFormation Resource AWS::Route53Resolver::ResolverQueryLoggingConfig

import { CfnResource, Resolvable } from '../../base';

export type ResolverQueryLoggingConfig_Type =
  'AWS::Route53Resolver::ResolverQueryLoggingConfig';
export const ResolverQueryLoggingConfig_Type =
  'AWS::Route53Resolver::ResolverQueryLoggingConfig';

/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html}
 */
export default function ResolverQueryLoggingConfig(
  props: ResolverQueryLoggingConfig_Properties
) {
  return new CfnResource<ResolverQueryLoggingConfig_Properties>(
    ResolverQueryLoggingConfig_Type,
    props
  );
}

/**
 * Resource schema for AWS::Route53Resolver::ResolverQueryLoggingConfig.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html}
 */
export type ResolverQueryLoggingConfig_Properties = {
  Id?: Resolvable<string>;
  OwnerId?: Resolvable<string>;
  Status?: Resolvable<'CREATING' | 'CREATED' | 'DELETING' | 'FAILED'>;
  ShareStatus?: Resolvable<'NOT_SHARED' | 'SHARED_WITH_ME' | 'SHARED_BY_ME'>;
  AssociationCount?: Resolvable<number>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#cfn-route53resolver-resolverqueryloggingconfig-name}
   */
  Name?: Resolvable<string>;
  CreatorRequestId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#cfn-route53resolver-resolverqueryloggingconfig-destinationarn}
   */
  DestinationArn?: Resolvable<string>;
  CreationTime?: Resolvable<string>;
};
