// CloudFormation Resource AWS::SageMaker::ModelPackageGroup

import { CfnResource, Resolvable } from '../../base';

export type ModelPackageGroup_Type = 'AWS::SageMaker::ModelPackageGroup';
export const ModelPackageGroup_Type = 'AWS::SageMaker::ModelPackageGroup';

/**
 * Resource Type definition for AWS::SageMaker::ModelPackageGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html}
 */
export default function ModelPackageGroup(props: ModelPackageGroup_Properties) {
  return new CfnResource<ModelPackageGroup_Properties>(
    ModelPackageGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::SageMaker::ModelPackageGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html}
 */
export type ModelPackageGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-tags}
   */
  Tags?: Tag[];
  ModelPackageGroupArn?: ModelPackageGroupArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-modelpackagegroupname}
   */
  ModelPackageGroupName: ModelPackageGroupName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-modelpackagegroupdescription}
   */
  ModelPackageGroupDescription?: ModelPackageGroupDescription;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackagegroup.html#cfn-sagemaker-modelpackagegroup-modelpackagegrouppolicy}
   */
  ModelPackageGroupPolicy?:
    | {
        [k: string]: unknown;
      }
    | Resolvable<string>;
  CreationTime?: Resolvable<string>;
  ModelPackageGroupStatus?: Resolvable<
    | 'Pending'
    | 'InProgress'
    | 'Completed'
    | 'Failed'
    | 'Deleting'
    | 'DeleteFailed'
  >;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};

export type ModelPackageGroupDescription = Resolvable<string>;

export type ModelPackageGroupName = Resolvable<string>;

export type ModelPackageGroupArn = Resolvable<string>;
