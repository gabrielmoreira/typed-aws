// CloudFormation Resource AWS::Greengrass::DeviceDefinitionVersion

import { CFResource } from '../../base';

export type DeviceDefinitionVersion_Type =
  'AWS::Greengrass::DeviceDefinitionVersion';
export const DeviceDefinitionVersion_Type =
  'AWS::Greengrass::DeviceDefinitionVersion';

/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html}
 */
export default function DeviceDefinitionVersion(
  props: DeviceDefinitionVersion_Properties
) {
  return new CFResource<
    DeviceDefinitionVersion_Type,
    DeviceDefinitionVersion_Properties
  >(DeviceDefinitionVersion_Type, props);
}

/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html}
 */
export type DeviceDefinitionVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-devices}
   */
  Devices: Device[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-devicedefinitionid}
   */
  DeviceDefinitionId: string;
  Id?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html}
 */
export type Device = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-syncshadow}
   */
  SyncShadow?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-thingarn}
   */
  ThingArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-id}
   */
  Id: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html#cfn-greengrass-devicedefinitionversion-device-certificatearn}
   */
  CertificateArn: string;
};
