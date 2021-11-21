// CloudFormation Resource AWS::IoT::ResourceSpecificLogging

import { CFResource } from '../../base';

export type ResourceSpecificLogging_Type = 'AWS::IoT::ResourceSpecificLogging';
export const ResourceSpecificLogging_Type = 'AWS::IoT::ResourceSpecificLogging';

/**
 * Resource-specific logging allows you to specify a logging level for a
 * specific thing group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html}
 */
export default function ResourceSpecificLogging(
  props: ResourceSpecificLogging_Properties
) {
  return new CFResource<
    ResourceSpecificLogging_Type,
    ResourceSpecificLogging_Properties
  >(ResourceSpecificLogging_Type, props);
}

/**
 * Resource-specific logging allows you to specify a logging level for a
 * specific thing group. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html}
 */
export type ResourceSpecificLogging_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-targettype}
   */
  TargetType: 'THING_GROUP';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-targetname}
   */
  TargetName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-loglevel}
   */
  LogLevel: 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'DISABLED';
  TargetId?: string;
};
