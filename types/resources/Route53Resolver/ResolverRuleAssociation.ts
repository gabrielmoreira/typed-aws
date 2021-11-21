// CloudFormation Resource AWS::Route53Resolver::ResolverRuleAssociation

import { CfnResource } from '../../base';

export type ResolverRuleAssociation_Type =
  'AWS::Route53Resolver::ResolverRuleAssociation';
export const ResolverRuleAssociation_Type =
  'AWS::Route53Resolver::ResolverRuleAssociation';

/**
 * Resource Type definition for
 * AWS::Route53Resolver::ResolverRuleAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html}
 */
export default function ResolverRuleAssociation(
  props: ResolverRuleAssociation_Properties
) {
  return new CfnResource<ResolverRuleAssociation_Properties>(
    ResolverRuleAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::Route53Resolver::ResolverRuleAssociation {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html}
 */
export type ResolverRuleAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#cfn-route53resolver-resolverruleassociation-resolverruleid}
   */
  ResolverRuleId: string;
  ResolverRuleAssociationId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#cfn-route53resolver-resolverruleassociation-vpcid}
   */
  VPCId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#cfn-route53resolver-resolverruleassociation-name}
   */
  Name?: string;
};
