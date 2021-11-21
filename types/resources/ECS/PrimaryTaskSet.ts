// CloudFormation Resource AWS::ECS::PrimaryTaskSet

import { CFResource } from '../../base';

export type PrimaryTaskSet_Type = 'AWS::ECS::PrimaryTaskSet';
export const PrimaryTaskSet_Type = 'AWS::ECS::PrimaryTaskSet';

/**
 * A pseudo-resource that manages which of your ECS task sets is primary.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html}
 */
export default function PrimaryTaskSet(props: PrimaryTaskSet_Properties) {
  return new CFResource<PrimaryTaskSet_Type, PrimaryTaskSet_Properties>(
    PrimaryTaskSet_Type,
    props
  );
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
  Cluster: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-tasksetid}
   */
  TaskSetId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-service}
   */
  Service: string;
};
