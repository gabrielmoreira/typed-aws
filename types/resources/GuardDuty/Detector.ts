// CloudFormation Resource AWS::GuardDuty::Detector

import { CfnResource } from '../../base';

export type Detector_Type = 'AWS::GuardDuty::Detector';
export const Detector_Type = 'AWS::GuardDuty::Detector';

/**
 * Resource Type definition for AWS::GuardDuty::Detector {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html}
 */
export default function Detector(props: Detector_Properties) {
  return new CfnResource<Detector_Properties>(Detector_Type, props);
}

/**
 * Resource Type definition for AWS::GuardDuty::Detector {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html}
 */
export type Detector_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-findingpublishingfrequency}
   */
  FindingPublishingFrequency?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-enable}
   */
  Enable: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-datasources}
   */
  DataSources?: CFNDataSourceConfigurations;
  Id?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html}
 */
export type CFNS3LogsConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfns3logsconfiguration.html#cfn-guardduty-detector-cfns3logsconfiguration-enable}
   */
  Enable?: boolean;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html}
 */
export type CFNDataSourceConfigurations = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-guardduty-detector-cfndatasourceconfigurations.html#cfn-guardduty-detector-cfndatasourceconfigurations-s3logs}
   */
  S3Logs?: CFNS3LogsConfiguration;
};
