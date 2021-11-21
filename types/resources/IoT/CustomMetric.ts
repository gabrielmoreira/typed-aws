// CloudFormation Resource AWS::IoT::CustomMetric

import { CfnResource } from '../../base';

export type CustomMetric_Type = 'AWS::IoT::CustomMetric';
export const CustomMetric_Type = 'AWS::IoT::CustomMetric';

/**
 * A custom metric published by your devices to Device Defender. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html}
 */
export default function CustomMetric(props: CustomMetric_Properties) {
  return new CfnResource<CustomMetric_Properties>(CustomMetric_Type, props);
}

/**
 * A custom metric published by your devices to Device Defender. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html}
 */
export type CustomMetric_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-metricname}
   */
  MetricName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-displayname}
   */
  DisplayName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-metrictype}
   */
  MetricType: 'string-list' | 'ip-address-list' | 'number-list' | 'number';
  MetricArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-custommetric.html#cfn-iot-custommetric-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
