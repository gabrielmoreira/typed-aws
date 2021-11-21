// CloudFormation Resource AWS::IoT::Thing

import { CfnResource } from '../../base';

export type Thing_Type = 'AWS::IoT::Thing';
export const Thing_Type = 'AWS::IoT::Thing';

/**
 * Resource Type definition for AWS::IoT::Thing {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html}
 */
export default function Thing(props: Thing_Properties) {
  return new CfnResource<Thing_Properties>(Thing_Type, props);
}

/**
 * Resource Type definition for AWS::IoT::Thing {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html}
 */
export type Thing_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-attributepayload}
   */
  AttributePayload?: AttributePayload;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-thingname}
   */
  ThingName?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html}
 */
export type AttributePayload = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-thing-attributepayload.html#cfn-iot-thing-attributepayload-attributes}
   */
  Attributes?: {
    [k: string]: unknown;
  };
};
