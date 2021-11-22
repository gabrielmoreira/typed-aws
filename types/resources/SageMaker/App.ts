// CloudFormation Resource AWS::SageMaker::App

import { CfnResource, Resolvable } from '../../base';

export type App_Type = 'AWS::SageMaker::App';
export const App_Type = 'AWS::SageMaker::App';

/**
 * Resource Type definition for AWS::SageMaker::App {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html}
 */
export default function App(props: App_Properties) {
  return new CfnResource<App_Properties>(App_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::App {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html}
 */
export type App_Properties = {
  AppArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-appname}
   */
  AppName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-apptype}
   */
  AppType: Resolvable<'JupyterServer' | 'KernelGateway'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-domainid}
   */
  DomainId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-resourcespec}
   */
  ResourceSpec?: ResourceSpec;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-app.html#cfn-sagemaker-app-userprofilename}
   */
  UserProfileName: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html}
 */
export type ResourceSpec = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-instancetype}
   */
  InstanceType?: Resolvable<
    | 'system'
    | 'ml.t3.micro'
    | 'ml.t3.small'
    | 'ml.t3.medium'
    | 'ml.t3.large'
    | 'ml.t3.xlarge'
    | 'ml.t3.2xlarge'
    | 'ml.m5.large'
    | 'ml.m5.xlarge'
    | 'ml.m5.2xlarge'
    | 'ml.m5.4xlarge'
    | 'ml.m5.8xlarge'
    | 'ml.m5.12xlarge'
    | 'ml.m5.16xlarge'
    | 'ml.m5.24xlarge'
    | 'ml.c5.large'
    | 'ml.c5.xlarge'
    | 'ml.c5.2xlarge'
    | 'ml.c5.4xlarge'
    | 'ml.c5.9xlarge'
    | 'ml.c5.12xlarge'
    | 'ml.c5.18xlarge'
    | 'ml.c5.24xlarge'
    | 'ml.p3.2xlarge'
    | 'ml.p3.8xlarge'
    | 'ml.p3.16xlarge'
    | 'ml.g4dn.xlarge'
    | 'ml.g4dn.2xlarge'
    | 'ml.g4dn.4xlarge'
    | 'ml.g4dn.8xlarge'
    | 'ml.g4dn.12xlarge'
    | 'ml.g4dn.16xlarge'
  >;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-sagemakerimagearn}
   */
  SageMakerImageArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-app-resourcespec.html#cfn-sagemaker-app-resourcespec-sagemakerimageversionarn}
   */
  SageMakerImageVersionArn?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
