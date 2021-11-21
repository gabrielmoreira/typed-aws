// CloudFormation Resource AWS::WAFv2::LoggingConfiguration

import { CFResource } from '../../base';

export type LoggingConfiguration_Type = 'AWS::WAFv2::LoggingConfiguration';
export const LoggingConfiguration_Type = 'AWS::WAFv2::LoggingConfiguration';

/**
 * A WAFv2 Logging Configuration Resource Provider {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html}
 */
export default function LoggingConfiguration(
  props: LoggingConfiguration_Properties
) {
  return new CFResource<
    LoggingConfiguration_Type,
    LoggingConfiguration_Properties
  >(LoggingConfiguration_Type, props);
}

/**
 * A WAFv2 Logging Configuration Resource Provider {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html}
 */
export type LoggingConfiguration_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-resourcearn}
   */
  ResourceArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-logdestinationconfigs}
   */
  LogDestinationConfigs: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-redactedfields}
   */
  RedactedFields?: FieldToMatch[];
  ManagedByFirewallManager?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-loggingfilter}
   */
  LoggingFilter?: {
    DefaultBehavior: 'KEEP' | 'DROP';
    Filters: Filter[];
  };
};

export type Filter = {
  Behavior: 'KEEP' | 'DROP';
  Conditions: Condition[];
  Requirement: 'MEETS_ALL' | 'MEETS_ANY';
};

export type Condition = {
  ActionCondition?: {
    Action: 'ALLOW' | 'BLOCK' | 'COUNT';
  };
  LabelNameCondition?: {
    LabelName: string;
  };
};

/**
 * A key-value pair to associate with a resource. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html}
 */
export type FieldToMatch = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-jsonbody}
   */
  JsonBody?: {
    InvalidFallbackBehavior?: 'MATCH' | 'NO_MATCH' | 'EVALUATE_AS_STRING';
    MatchPattern: {
      All?: {
        [k: string]: unknown;
      };
      IncludedPaths?: string[];
    };
    MatchScope: 'ALL' | 'KEY' | 'VALUE';
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-method}
   */
  Method?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-querystring}
   */
  QueryString?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-singleheader}
   */
  SingleHeader?: {
    Name: string;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-uripath}
   */
  UriPath?: {
    [k: string]: unknown;
  };
};
