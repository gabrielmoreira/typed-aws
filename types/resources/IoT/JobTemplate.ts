// CloudFormation Resource AWS::IoT::JobTemplate

import { CfnResource, Resolvable } from '../../base';

export type JobTemplate_Type = 'AWS::IoT::JobTemplate';
export const JobTemplate_Type = 'AWS::IoT::JobTemplate';

/**
 * Job templates enable you to preconfigure jobs so that you can deploy
 * them to multiple sets of target devices. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html}
 */
export default function JobTemplate(props: JobTemplate_Properties) {
  return new CfnResource<JobTemplate_Properties>(JobTemplate_Type, props);
}

/**
 * Job templates enable you to preconfigure jobs so that you can deploy
 * them to multiple sets of target devices. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html}
 */
export type JobTemplate_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobarn}
   */
  JobArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-jobtemplateid}
   */
  JobTemplateId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-description}
   */
  Description: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-document}
   */
  Document?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html#cfn-iot-jobtemplate-documentsource}
   */
  DocumentSource?: Resolvable<string>;
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

export type BaseRatePerMinute = Resolvable<number>;

export type IncrementFactor = Resolvable<number>;

export type RateIncreaseCriteria = {
  NumberOfNotifiedThings?: NumberOfNotifiedThings;
  NumberOfSucceededThings?: NumberOfSucceededThings;
};

export type NumberOfNotifiedThings = Resolvable<number>;

export type NumberOfSucceededThings = Resolvable<number>;

export type MaximumPerMinute = Resolvable<number>;

export type AbortCriteria = {
  Action: Action;
  FailureType: FailureType;
  MinNumberOfExecutedThings: MinNumberOfExecutedThings;
  ThresholdPercentage: ThresholdPercentage;
};

export type Action = Resolvable<'CANCEL'>;

export type FailureType = Resolvable<
  'FAILED' | 'REJECTED' | 'TIMED_OUT' | 'ALL'
>;

export type MinNumberOfExecutedThings = Resolvable<number>;

export type ThresholdPercentage = Resolvable<number>;

export type InProgressTimeoutInMinutes = Resolvable<number>;

export type RoleArn = Resolvable<string>;

export type ExpiresInSec = Resolvable<number>;

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
