// CloudFormation Resource AWS::ElasticLoadBalancingV2::ListenerCertificate

import { CFResource } from '../../base';

export type ListenerCertificate_Type =
  'AWS::ElasticLoadBalancingV2::ListenerCertificate';
export const ListenerCertificate_Type =
  'AWS::ElasticLoadBalancingV2::ListenerCertificate';

/**
 * Resource Type definition for
 * AWS::ElasticLoadBalancingV2::ListenerCertificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html}
 */
export default function ListenerCertificate(
  props: ListenerCertificate_Properties
) {
  return new CFResource<
    ListenerCertificate_Type,
    ListenerCertificate_Properties
  >(ListenerCertificate_Type, props);
}

/**
 * Resource Type definition for
 * AWS::ElasticLoadBalancingV2::ListenerCertificate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html}
 */
export type ListenerCertificate_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-listenerarn}
   */
  ListenerArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-certificates}
   */
  Certificates: Certificate[];
  Id?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificates.html}
 */
export type Certificate = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificates.html#cfn-elasticloadbalancingv2-listener-certificates-certificatearn}
   */
  CertificateArn?: string;
};
