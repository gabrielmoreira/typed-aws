// CloudFormation Resource AWS::ECS::PrimaryTaskSet

import { CfnResource, Resolvable } from '../../base';

export type PrimaryTaskSet_Type = 'AWS::ECS::PrimaryTaskSet';
export const PrimaryTaskSet_Type = 'AWS::ECS::PrimaryTaskSet';

/**
 * A pseudo-resource that manages which of your ECS task sets is primary.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html}
 */
export default function PrimaryTaskSet(props: PrimaryTaskSet_Properties) {
  return new CfnResource<PrimaryTaskSet_Properties>(PrimaryTaskSet_Type, props);
}

/**
 * A pseudo-resource that manages which of your ECS task sets is primary.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html}
 */
export type PrimaryTaskSet_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-cluster}
   */
  Cluster: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-tasksetid}
   */
  TaskSetId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-service}
   */
  Service: Resolvable<string>;
};
