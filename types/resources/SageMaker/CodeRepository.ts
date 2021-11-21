// CloudFormation Resource AWS::SageMaker::CodeRepository

import { CFResource } from '../../base';

export type CodeRepository_Type = 'AWS::SageMaker::CodeRepository';
export const CodeRepository_Type = 'AWS::SageMaker::CodeRepository';

/**
 * Resource Type definition for AWS::SageMaker::CodeRepository {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html}
 */
export default function CodeRepository(props: CodeRepository_Properties) {
  return new CFResource<CodeRepository_Type, CodeRepository_Properties>(
    CodeRepository_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::SageMaker::CodeRepository {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html}
 */
export type CodeRepository_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#cfn-sagemaker-coderepository-gitconfig}
   */
  GitConfig: GitConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#cfn-sagemaker-coderepository-coderepositoryname}
   */
  CodeRepositoryName?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-coderepository.html#cfn-sagemaker-coderepository-tags}
   */
  Tags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html}
 */
export type GitConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html#cfn-sagemaker-coderepository-gitconfig-secretarn}
   */
  SecretArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html#cfn-sagemaker-coderepository-gitconfig-repositoryurl}
   */
  RepositoryUrl: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-coderepository-gitconfig.html#cfn-sagemaker-coderepository-gitconfig-branch}
   */
  Branch?: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
