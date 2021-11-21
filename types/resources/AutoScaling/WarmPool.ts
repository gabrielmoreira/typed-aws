// CloudFormation Resource AWS::AutoScaling::WarmPool

import { CFResource } from '../../base';

export type WarmPool_Type = 'AWS::AutoScaling::WarmPool';
export const WarmPool_Type = 'AWS::AutoScaling::WarmPool';

/**
 * Resource schema for AWS::AutoScaling::WarmPool. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html}
 */
export default function WarmPool(props: WarmPool_Properties) {
  return new CFResource<WarmPool_Type, WarmPool_Properties>(
    WarmPool_Type,
    props
  );
}

/**
 * Resource schema for AWS::AutoScaling::WarmPool. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html}
 */
export type WarmPool_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html#cfn-autoscaling-warmpool-autoscalinggroupname}
   */
  AutoScalingGroupName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html#cfn-autoscaling-warmpool-maxgrouppreparedcapacity}
   */
  MaxGroupPreparedCapacity?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html#cfn-autoscaling-warmpool-minsize}
   */
  MinSize?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-warmpool.html#cfn-autoscaling-warmpool-poolstate}
   */
  PoolState?: string;
};
