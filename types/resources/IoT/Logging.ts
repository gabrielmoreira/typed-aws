// CloudFormation Resource AWS::IoT::Logging

import { CfnResource, Resolvable } from '../../base';

export type Logging_Type = 'AWS::IoT::Logging';
export const Logging_Type = 'AWS::IoT::Logging';

/**
 * Logging Options enable you to configure your IoT V2 logging role and
 * default logging level so that you can monitor progress events logs as
 * it passes from your devices through Iot core service. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html}
 */
export default function Logging(props: Logging_Properties) {
  return new CfnResource<Logging_Properties>(Logging_Type, props);
}

/**
 * Logging Options enable you to configure your IoT V2 logging role and
 * default logging level so that you can monitor progress events logs as
 * it passes from your devices through Iot core service. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html}
 */
export type Logging_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-accountid}
   */
  AccountId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-rolearn}
   */
  RoleArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-defaultloglevel}
   */
  DefaultLogLevel: Resolvable<'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'DISABLED'>;
};
