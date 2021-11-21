// CloudFormation Resource AWS::Batch::SchedulingPolicy

import { CFResource } from '../../base';

export type SchedulingPolicy_Type = 'AWS::Batch::SchedulingPolicy';
export const SchedulingPolicy_Type = 'AWS::Batch::SchedulingPolicy';

/**
 * Resource Type schema for AWS::Batch::SchedulingPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export default function SchedulingPolicy(props: SchedulingPolicy_Properties) {
  return new CFResource<SchedulingPolicy_Type, SchedulingPolicy_Properties>(
    SchedulingPolicy_Type,
    props
  );
}

/**
 * Resource Type schema for AWS::Batch::SchedulingPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html}
 */
export type SchedulingPolicy_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html#cfn-batch-schedulingpolicy-name}
   */
  Name?: string;
  Arn?: ResourceArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html#cfn-batch-schedulingpolicy-fairsharepolicy}
   */
  FairsharePolicy?: FairsharePolicy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-schedulingpolicy.html#cfn-batch-schedulingpolicy-tags}
   */
  Tags?: {
    [k: string]: string;
  };
};

export type ResourceArn = string;

/**
 * Fair Share Policy for the Job Queue. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html}
 */
export type FairsharePolicy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html#cfn-batch-schedulingpolicy-fairsharepolicy-sharedecayseconds}
   */
  ShareDecaySeconds?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html#cfn-batch-schedulingpolicy-fairsharepolicy-computereservation}
   */
  ComputeReservation?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-fairsharepolicy.html#cfn-batch-schedulingpolicy-fairsharepolicy-sharedistribution}
   */
  ShareDistribution?: ShareAttributes[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-shareattributes.html}
 */
export type ShareAttributes = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-shareattributes.html#cfn-batch-schedulingpolicy-shareattributes-shareidentifier}
   */
  ShareIdentifier?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-batch-schedulingpolicy-shareattributes.html#cfn-batch-schedulingpolicy-shareattributes-weightfactor}
   */
  WeightFactor?: number;
};
