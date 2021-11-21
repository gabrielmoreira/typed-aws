// CloudFormation Resource AWS::Route53::HealthCheck

import { CfnResource } from '../../base';

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
  HealthCheckId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#cfn-route53-healthcheck-healthcheckconfig}
   */
  HealthCheckConfig: {
    AlarmIdentifier?: AlarmIdentifier;
    ChildHealthChecks?: string[];
    EnableSNI?: boolean;
    FailureThreshold?: number;
    FullyQualifiedDomainName?: string;
    HealthThreshold?: number;
    InsufficientDataHealthStatus?: 'Healthy' | 'LastKnownStatus' | 'Unhealthy';
    Inverted?: boolean;
    IPAddress?: string;
    MeasureLatency?: boolean;
    Port?: number;
    Regions?: string[];
    RequestInterval?: number;
    ResourcePath?: string;
    SearchString?: string;
    RoutingControlArn?: string;
    Type:
      | 'CALCULATED'
      | 'CLOUDWATCH_METRIC'
      | 'HTTP'
      | 'HTTP_STR_MATCH'
      | 'HTTPS'
      | 'HTTPS_STR_MATCH'
      | 'TCP'
      | 'RECOVERY_CONTROL';
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#cfn-route53-healthcheck-healthchecktags}
   */
  HealthCheckTags?: HealthCheckTag[];
};

export type AlarmIdentifier = {
  Name: string;
  Region: string;
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
  Key: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html#cfn-route53-healthcheck-healthchecktag-value}
   */
  Value: string;
};
