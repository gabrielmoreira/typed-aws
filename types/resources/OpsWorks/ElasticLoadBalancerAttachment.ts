// CloudFormation Resource AWS::OpsWorks::ElasticLoadBalancerAttachment

import { CfnResource, Resolvable } from '../../base';

export type ElasticLoadBalancerAttachment_Type =
  'AWS::OpsWorks::ElasticLoadBalancerAttachment';
export const ElasticLoadBalancerAttachment_Type =
  'AWS::OpsWorks::ElasticLoadBalancerAttachment';

/**
 * Resource Type definition for
 * AWS::OpsWorks::ElasticLoadBalancerAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html}
 */
export default function ElasticLoadBalancerAttachment(
  props: ElasticLoadBalancerAttachment_Properties
) {
  return new CfnResource<ElasticLoadBalancerAttachment_Properties>(
    ElasticLoadBalancerAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::OpsWorks::ElasticLoadBalancerAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html}
 */
export type ElasticLoadBalancerAttachment_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html#cfn-opsworks-elbattachment-elbname}
   */
  ElasticLoadBalancerName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html#cfn-opsworks-elbattachment-layerid}
   */
  LayerId: Resolvable<string>;
};
