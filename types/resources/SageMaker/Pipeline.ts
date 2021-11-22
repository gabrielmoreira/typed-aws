// CloudFormation Resource AWS::SageMaker::Pipeline

import { CfnResource, Resolvable } from '../../base';

export type Pipeline_Type = 'AWS::SageMaker::Pipeline';
export const Pipeline_Type = 'AWS::SageMaker::Pipeline';

/**
 * Resource Type definition for AWS::SageMaker::Pipeline {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html}
 */
export default function Pipeline(props: Pipeline_Properties) {
  return new CfnResource<Pipeline_Properties>(Pipeline_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::Pipeline {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html}
 */
export type Pipeline_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinename}
   */
  PipelineName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedisplayname}
   */
  PipelineDisplayName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedescription}
   */
  PipelineDescription?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedefinition}
   */
  PipelineDefinition:
    | {
        PipelineDefinitionBody: Resolvable<string>;
      }
    | {
        PipelineDefinitionS3Location: S3Location;
      };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-rolearn}
   */
  RoleArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-tags}
   */
  Tags?: Tag[];
};

export type S3Location = {
  Bucket: Resolvable<string>;
  Key: Resolvable<string>;
  Version?: Resolvable<string>;
  ETag?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
