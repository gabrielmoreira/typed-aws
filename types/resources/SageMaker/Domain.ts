// CloudFormation Resource AWS::SageMaker::Domain

import { CfnResource, Resolvable } from '../../base';

export type Domain_Type = 'AWS::SageMaker::Domain';
export const Domain_Type = 'AWS::SageMaker::Domain';

/**
 * Resource Type definition for AWS::SageMaker::Domain {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html}
 */
export default function Domain(props: Domain_Properties) {
  return new CfnResource<Domain_Properties>(Domain_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::Domain {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html}
 */
export type Domain_Properties = {
  DomainArn?: Resolvable<string>;
  Url?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-appnetworkaccesstype}
   */
  AppNetworkAccessType?: Resolvable<'PublicInternetOnly' | 'VpcOnly'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-authmode}
   */
  AuthMode: Resolvable<'SSO' | 'IAM'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultusersettings}
   */
  DefaultUserSettings: UserSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainname}
   */
  DomainName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-kmskeyid}
   */
  KmsKeyId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-subnetids}
   */
  SubnetIds: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-vpcid}
   */
  VpcId: Resolvable<string>;
  DomainId?: Resolvable<string>;
  HomeEfsFileSystemId?: Resolvable<string>;
  SingleSignOnManagedApplicationInstanceId?: Resolvable<string>;
};

/**
 * A collection of settings that apply to users of Amazon SageMaker
 * Studio. These settings are specified when the CreateUserProfile API is
 * called, and as DefaultUserSettings when the CreateDomain API is
 * called. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html}
 */
export type UserSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-executionrole}
   */
  ExecutionRole?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-jupyterserverappsettings}
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-kernelgatewayappsettings}
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-securitygroups}
   */
  SecurityGroups?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-usersettings.html#cfn-sagemaker-domain-usersettings-sharingsettings}
   */
  SharingSettings?: SharingSettings;
};

/**
 * The JupyterServer app settings. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html}
 */
export type JupyterServerAppSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-jupyterserverappsettings.html#cfn-sagemaker-domain-jupyterserverappsettings-defaultresourcespec}
   */
  DefaultResourceSpec?: ResourceSpec;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html}
 */
export type ResourceSpec = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-instancetype}
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
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-sagemakerimagearn}
   */
  SageMakerImageArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-resourcespec.html#cfn-sagemaker-domain-resourcespec-sagemakerimageversionarn}
   */
  SageMakerImageVersionArn?: Resolvable<string>;
};

/**
 * The kernel gateway app settings. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html}
 */
export type KernelGatewayAppSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html#cfn-sagemaker-domain-kernelgatewayappsettings-customimages}
   */
  CustomImages?: CustomImage[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-kernelgatewayappsettings.html#cfn-sagemaker-domain-kernelgatewayappsettings-defaultresourcespec}
   */
  DefaultResourceSpec?: ResourceSpec;
};

/**
 * A custom SageMaker image. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html}
 */
export type CustomImage = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html#cfn-sagemaker-domain-customimage-appimageconfigname}
   */
  AppImageConfigName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html#cfn-sagemaker-domain-customimage-imagename}
   */
  ImageName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-customimage.html#cfn-sagemaker-domain-customimage-imageversionnumber}
   */
  ImageVersionNumber?: Resolvable<number>;
};

/**
 * Specifies options when sharing an Amazon SageMaker Studio notebook.
 * These settings are specified as part of DefaultUserSettings when the
 * CreateDomain API is called, and as part of UserSettings when the
 * CreateUserProfile API is called. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html}
 */
export type SharingSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html#cfn-sagemaker-domain-sharingsettings-notebookoutputoption}
   */
  NotebookOutputOption?: Resolvable<'Allowed' | 'Disabled'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html#cfn-sagemaker-domain-sharingsettings-s3kmskeyid}
   */
  S3KmsKeyId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-domain-sharingsettings.html#cfn-sagemaker-domain-sharingsettings-s3outputpath}
   */
  S3OutputPath?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
