// CloudFormation Resource AWS::Route53Resolver::ResolverQueryLoggingConfig

import { CfnResource } from '../../base';

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
  Id?: string;
  OwnerId?: string;
  Status?: 'CREATING' | 'CREATED' | 'DELETING' | 'FAILED';
  ShareStatus?: 'NOT_SHARED' | 'SHARED_WITH_ME' | 'SHARED_BY_ME';
  AssociationCount?: number;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#cfn-route53resolver-resolverqueryloggingconfig-name}
   */
  Name?: string;
  CreatorRequestId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#cfn-route53resolver-resolverqueryloggingconfig-destinationarn}
   */
  DestinationArn?: string;
  CreationTime?: string;
};
