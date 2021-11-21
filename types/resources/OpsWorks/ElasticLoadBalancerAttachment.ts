// CloudFormation Resource AWS::OpsWorks::ElasticLoadBalancerAttachment

import { CfnResource } from '../../base';

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
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html#cfn-opsworks-elbattachment-elbname}
   */
  ElasticLoadBalancerName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-elbattachment.html#cfn-opsworks-elbattachment-layerid}
   */
  LayerId: string;
};
