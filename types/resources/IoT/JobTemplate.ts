// CloudFormation Resource AWS::IoT::JobTemplate

import { CFResource } from '../../base';

export type JobTemplate_Type = 'AWS::IoT::JobTemplate';
export const JobTemplate_Type = 'AWS::IoT::JobTemplate';

/**
 * Job templates enable you to preconfigure jobs so that you can deploy
 * them to multiple sets of target devices. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html}
 */
export default function JobTemplate(props: JobTemplate_Properties) {
  return new CFResource<JobTemplate_Type, JobTemplate_Properties>(
    JobTemplate_Type,
    props
  );
}

/**
 * Job templates enable you to preconfigure jobs so that you can deploy
 * them to multiple sets of target devices. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html}
 */
export type JobTemplate_Properties = {
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobarn}
   */
  JobArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobtemplateid}
   */
  JobTemplateId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-description}
   */
  Description: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-document}
   */
  Document?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-documentsource}
   */
  DocumentSource?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-timeoutconfig}
   */
  TimeoutConfig?: {
    InProgressTimeoutInMinutes: InProgressTimeoutInMinutes;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobexecutionsrolloutconfig}
   */
  JobExecutionsRolloutConfig?: {
    ExponentialRolloutRate?: ExponentialRolloutRate;
    MaximumPerMinute?: MaximumPerMinute;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-abortconfig}
   */
  AbortConfig?: {
    CriteriaList: AbortCriteria[];
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-presignedurlconfig}
   */
  PresignedUrlConfig?: {
    RoleArn: RoleArn;
    ExpiresInSec?: ExpiresInSec;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-tags}
   */
  Tags?: Tag[];
};

export type ExponentialRolloutRate = {
  BaseRatePerMinute: BaseRatePerMinute;
  IncrementFactor: IncrementFactor;
  RateIncreaseCriteria: {
    [k: string]: unknown;
  };
};

export type BaseRatePerMinute = number;

export type IncrementFactor = number;

export type RateIncreaseCriteria = {
  NumberOfNotifiedThings?: NumberOfNotifiedThings;
  NumberOfSucceededThings?: NumberOfSucceededThings;
};

export type NumberOfNotifiedThings = number;

export type NumberOfSucceededThings = number;

export type MaximumPerMinute = number;

export type AbortCriteria = {
  Action: Action;
  FailureType: FailureType;
  MinNumberOfExecutedThings: MinNumberOfExecutedThings;
  ThresholdPercentage: ThresholdPercentage;
};

export type Action = 'CANCEL';

export type FailureType = 'FAILED' | 'REJECTED' | 'TIMED_OUT' | 'ALL';

export type MinNumberOfExecutedThings = number;

export type ThresholdPercentage = number;

export type InProgressTimeoutInMinutes = number;

export type RoleArn = string;

export type ExpiresInSec = number;

export type Tag = {
  Key: string;
  Value: string;
};
