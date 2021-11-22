// CloudFormation Resource AWS::Greengrass::LoggerDefinitionVersion

import { CfnResource, Resolvable } from '../../base';

export type LoggerDefinitionVersion_Type =
  'AWS::Greengrass::LoggerDefinitionVersion';
export const LoggerDefinitionVersion_Type =
  'AWS::Greengrass::LoggerDefinitionVersion';

/**
 * Resource Type definition for AWS::Greengrass::LoggerDefinitionVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html}
 */
export default function LoggerDefinitionVersion(
  props: LoggerDefinitionVersion_Properties
) {
  return new CfnResource<LoggerDefinitionVersion_Properties>(
    LoggerDefinitionVersion_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Greengrass::LoggerDefinitionVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html}
 */
export type LoggerDefinitionVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html#cfn-greengrass-loggerdefinitionversion-loggers}
   */
  Loggers: Logger[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html#cfn-greengrass-loggerdefinitionversion-loggerdefinitionid}
   */
  LoggerDefinitionId: Resolvable<string>;
  Id?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html}
 */
export type Logger = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-space}
   */
  Space?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-type}
   */
  Type: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-level}
   */
  Level: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-id}
   */
  Id: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinitionversion-logger.html#cfn-greengrass-loggerdefinitionversion-logger-component}
   */
  Component: Resolvable<string>;
};
