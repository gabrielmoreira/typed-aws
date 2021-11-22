// CloudFormation Resource AWS::Route53::DNSSEC

import { CfnResource, Resolvable } from '../../base';

export type DNSSEC_Type = 'AWS::Route53::DNSSEC';
export const DNSSEC_Type = 'AWS::Route53::DNSSEC';

/**
 * Resource used to control (enable/disable) DNSSEC in a specific hosted
 * zone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html}
 */
export default function DNSSEC(props: DNSSEC_Properties) {
  return new CfnResource<DNSSEC_Properties>(DNSSEC_Type, props);
}

/**
 * Resource used to control (enable/disable) DNSSEC in a specific hosted
 * zone. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html}
 */
export type DNSSEC_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html#cfn-route53-dnssec-hostedzoneid}
   */
  HostedZoneId: Resolvable<string>;
};
