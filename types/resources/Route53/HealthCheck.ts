// CloudFormation Resource AWS::Route53::HealthCheck

import { CfnResource, Resolvable } from '../../base';

export type HealthCheck_Type = 'AWS::Route53::HealthCheck';
export const HealthCheck_Type = 'AWS::Route53::HealthCheck';

/**
 * Resource schema for AWS::Route53::HealthCheck. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 */
export default function HealthCheck(props: HealthCheck_Properties) {
  return new CfnResource<HealthCheck_Properties>(HealthCheck_Type, props);
}

/**
 * Resource schema for AWS::Route53::HealthCheck. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html}
 */
export type HealthCheck_Properties = {
  HealthCheckId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#cfn-route53-healthcheck-healthcheckconfig}
   */
  HealthCheckConfig: {
    AlarmIdentifier?: AlarmIdentifier;
    ChildHealthChecks?: Resolvable<string>[];
    EnableSNI?: Resolvable<boolean>;
    FailureThreshold?: Resolvable<number>;
    FullyQualifiedDomainName?: Resolvable<string>;
    HealthThreshold?: Resolvable<number>;
    InsufficientDataHealthStatus?: Resolvable<
      'Healthy' | 'LastKnownStatus' | 'Unhealthy'
    >;
    Inverted?: Resolvable<boolean>;
    IPAddress?: Resolvable<string>;
    MeasureLatency?: Resolvable<boolean>;
    Port?: Resolvable<number>;
    Regions?: Resolvable<string>[];
    RequestInterval?: Resolvable<number>;
    ResourcePath?: Resolvable<string>;
    SearchString?: Resolvable<string>;
    RoutingControlArn?: Resolvable<string>;
    Type: Resolvable<
      | 'CALCULATED'
      | 'CLOUDWATCH_METRIC'
      | 'HTTP'
      | 'HTTP_STR_MATCH'
      | 'HTTPS'
      | 'HTTPS_STR_MATCH'
      | 'TCP'
      | 'RECOVERY_CONTROL'
    >;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#cfn-route53-healthcheck-healthchecktags}
   */
  HealthCheckTags?: HealthCheckTag[];
};

export type AlarmIdentifier = {
  Name: Resolvable<string>;
  Region: Resolvable<string>;
};

/**
 * A key-value pair to associate with a resource. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html}
 */
export type HealthCheckTag = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html#cfn-route53-healthcheck-healthchecktag-key}
   */
  Key: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html#cfn-route53-healthcheck-healthchecktag-value}
   */
  Value: Resolvable<string>;
};
