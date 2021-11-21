// CloudFormation Resource AWS::NetworkFirewall::LoggingConfiguration

import { CFResource } from '../../base';

export type LoggingConfiguration_Type =
  'AWS::NetworkFirewall::LoggingConfiguration';
export const LoggingConfiguration_Type =
  'AWS::NetworkFirewall::LoggingConfiguration';

/**
 * Resource type definition for
 * AWS::NetworkFirewall::LoggingConfiguration {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html}
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
 * Resource type definition for
 * AWS::NetworkFirewall::LoggingConfiguration {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html}
 */
export type LoggingConfiguration_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-firewallname}
   */
  FirewallName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-firewallarn}
   */
  FirewallArn: ResourceArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-loggingconfiguration}
   */
  LoggingConfiguration: LoggingConfiguration;
};

export type ResourceArn = string;

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html}
 */
export type LoggingConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-loggingconfiguration-logdestinationconfigs}
   */
  LogDestinationConfigs: LogDestinationConfig[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html}
 */
export type LogDestinationConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logtype}
   */
  LogType: 'ALERT' | 'FLOW';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestinationtype}
   */
  LogDestinationType: 'S3' | 'CloudWatchLogs' | 'KinesisDataFirehose';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestination}
   */
  LogDestination: {
    [k: string]: string;
  };
};
