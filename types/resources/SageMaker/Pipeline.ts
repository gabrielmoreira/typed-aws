// CloudFormation Resource AWS::SageMaker::Pipeline

import { CFResource } from '../../base';

export type Pipeline_Type = 'AWS::SageMaker::Pipeline';
export const Pipeline_Type = 'AWS::SageMaker::Pipeline';

/**
 * Resource Type definition for AWS::SageMaker::Pipeline {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html}
 */
export default function Pipeline(props: Pipeline_Properties) {
  return new CFResource<Pipeline_Type, Pipeline_Properties>(
    Pipeline_Type,
    props
  );
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
  PipelineName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedisplayname}
   */
  PipelineDisplayName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedescription}
   */
  PipelineDescription?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedefinition}
   */
  PipelineDefinition:
    | {
        PipelineDefinitionBody: string;
      }
    | {
        PipelineDefinitionS3Location: S3Location;
      };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-rolearn}
   */
  RoleArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-tags}
   */
  Tags?: Tag[];
};

export type S3Location = {
  Bucket: string;
  Key: string;
  Version?: string;
  ETag?: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
