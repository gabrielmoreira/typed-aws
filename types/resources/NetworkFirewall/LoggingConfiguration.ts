// CloudFormation Resource AWS::NetworkFirewall::LoggingConfiguration

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<LoggingConfiguration_Properties>(
    LoggingConfiguration_Type,
    props
  );
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
  FirewallName?: Resolvable<string>;
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

export type ResourceArn = Resolvable<string>;

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
  LogType: Resolvable<'ALERT' | 'FLOW'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestinationtype}
   */
  LogDestinationType: Resolvable<
    'S3' | 'CloudWatchLogs' | 'KinesisDataFirehose'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestination}
   */
  LogDestination: {
    [k: string]: Resolvable<string>;
  };
};
