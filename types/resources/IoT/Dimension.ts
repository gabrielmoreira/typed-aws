// CloudFormation Resource AWS::IoT::Dimension

import { CfnResource } from '../../base';

export type Dimension_Type = 'AWS::IoT::Dimension';
export const Dimension_Type = 'AWS::IoT::Dimension';

/**
 * A dimension can be used to limit the scope of a metric used in a
 * security profile for AWS IoT Device Defender. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html}
 */
export default function Dimension(props: Dimension_Properties) {
  return new CfnResource<Dimension_Properties>(Dimension_Type, props);
}

/**
 * A dimension can be used to limit the scope of a metric used in a
 * security profile for AWS IoT Device Defender. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html}
 */
export type Dimension_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-name}
   */
  Name?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-type}
   */
  Type: 'TOPIC_FILTER';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-stringvalues}
   */
  StringValues: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-tags}
   */
  Tags?: Tag[];
  Arn?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
