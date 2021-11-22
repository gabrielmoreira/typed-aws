// CloudFormation Resource AWS::IoT::ThingPrincipalAttachment

import { CfnResource, Resolvable } from '../../base';

export type ThingPrincipalAttachment_Type =
  'AWS::IoT::ThingPrincipalAttachment';
export const ThingPrincipalAttachment_Type =
  'AWS::IoT::ThingPrincipalAttachment';

/**
 * Resource Type definition for AWS::IoT::ThingPrincipalAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html}
 */
export default function ThingPrincipalAttachment(
  props: ThingPrincipalAttachment_Properties
) {
  return new CfnResource<ThingPrincipalAttachment_Properties>(
    ThingPrincipalAttachment_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::IoT::ThingPrincipalAttachment {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html}
 */
export type ThingPrincipalAttachment_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html#cfn-iot-thingprincipalattachment-principal}
   */
  Principal: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingprincipalattachment.html#cfn-iot-thingprincipalattachment-thingname}
   */
  ThingName: Resolvable<string>;
};
