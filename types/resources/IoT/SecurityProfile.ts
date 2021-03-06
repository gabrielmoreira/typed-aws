// CloudFormation Resource AWS::IoT::SecurityProfile

import { CfnResource, Resolvable } from '../../base';

export type SecurityProfile_Type = 'AWS::IoT::SecurityProfile';
export const SecurityProfile_Type = 'AWS::IoT::SecurityProfile';

/**
 * A security profile defines a set of expected behaviors for devices in
 * your account. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html}
 */
export default function SecurityProfile(props: SecurityProfile_Properties) {
  return new CfnResource<SecurityProfile_Properties>(
    SecurityProfile_Type,
    props
  );
}

/**
 * A security profile defines a set of expected behaviors for devices in
 * your account. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html}
 */
export type SecurityProfile_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-securityprofilename}
   */
  SecurityProfileName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-securityprofiledescription}
   */
  SecurityProfileDescription?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviors}
   */
  Behaviors?: Behavior[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-alerttargets}
   */
  AlertTargets?: {
    [k: string]: AlertTarget;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-additionalmetricstoretainv2}
   */
  AdditionalMetricsToRetainV2?: MetricToRetain[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-targetarns}
   */
  TargetArns?: Resolvable<string>[];
  SecurityProfileArn?: Resolvable<string>;
};

/**
 * A security profile behavior. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html}
 */
export type Behavior = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-metric}
   */
  Metric?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-metricdimension}
   */
  MetricDimension?: MetricDimension;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-criteria}
   */
  Criteria?: BehaviorCriteria;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html#cfn-iot-securityprofile-behavior-suppressalerts}
   */
  SuppressAlerts?: Resolvable<boolean>;
};

/**
 * The dimension of a metric. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html}
 */
export type MetricDimension = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html#cfn-iot-securityprofile-metricdimension-dimensionname}
   */
  DimensionName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html#cfn-iot-securityprofile-metricdimension-operator}
   */
  Operator?: Resolvable<'IN' | 'NOT_IN'>;
};

/**
 * The criteria by which the behavior is determined to be normal. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html}
 */
export type BehaviorCriteria = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-comparisonoperator}
   */
  ComparisonOperator?: Resolvable<
    | 'less-than'
    | 'less-than-equals'
    | 'greater-than'
    | 'greater-than-equals'
    | 'in-cidr-set'
    | 'not-in-cidr-set'
    | 'in-port-set'
    | 'not-in-port-set'
    | 'in-set'
    | 'not-in-set'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-value}
   */
  Value?: MetricValue;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-durationseconds}
   */
  DurationSeconds?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-consecutivedatapointstoalarm}
   */
  ConsecutiveDatapointsToAlarm?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-consecutivedatapointstoclear}
   */
  ConsecutiveDatapointsToClear?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-statisticalthreshold}
   */
  StatisticalThreshold?: StatisticalThreshold;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html#cfn-iot-securityprofile-behaviorcriteria-mldetectionconfig}
   */
  MlDetectionConfig?: MachineLearningDetectionConfig;
};

/**
 * The value to be compared with the metric. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html}
 */
export type MetricValue = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-count}
   */
  Count?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-cidrs}
   */
  Cidrs?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-ports}
   */
  Ports?: Resolvable<number>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-number}
   */
  Number?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-numbers}
   */
  Numbers?: Resolvable<number>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html#cfn-iot-securityprofile-metricvalue-strings}
   */
  Strings?: Resolvable<string>[];
};

/**
 * A statistical ranking (percentile) which indicates a threshold value
 * by which a behavior is determined to be in compliance or in violation
 * of the behavior. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html}
 */
export type StatisticalThreshold = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html#cfn-iot-securityprofile-statisticalthreshold-statistic}
   */
  Statistic?: Resolvable<
    | 'Average'
    | 'p0'
    | 'p0.1'
    | 'p0.01'
    | 'p1'
    | 'p10'
    | 'p50'
    | 'p90'
    | 'p99'
    | 'p99.9'
    | 'p99.99'
    | 'p100'
  >;
};

/**
 * The configuration of an ML Detect Security Profile. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html}
 */
export type MachineLearningDetectionConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html#cfn-iot-securityprofile-machinelearningdetectionconfig-confidencelevel}
   */
  ConfidenceLevel?: Resolvable<'LOW' | 'MEDIUM' | 'HIGH'>;
};

/**
 * A structure containing the alert target ARN and the role ARN. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html}
 */
export type AlertTarget = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html#cfn-iot-securityprofile-alerttarget-alerttargetarn}
   */
  AlertTargetArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html#cfn-iot-securityprofile-alerttarget-rolearn}
   */
  RoleArn: Resolvable<string>;
};

/**
 * The metric you want to retain. Dimensions are optional. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html}
 */
export type MetricToRetain = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html#cfn-iot-securityprofile-metrictoretain-metric}
   */
  Metric: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html#cfn-iot-securityprofile-metrictoretain-metricdimension}
   */
  MetricDimension?: MetricDimension;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
