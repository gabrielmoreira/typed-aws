// CloudFormation Resource AWS::SageMaker::UserProfile

import { CfnResource, Resolvable } from '../../base';

export type UserProfile_Type = 'AWS::SageMaker::UserProfile';
export const UserProfile_Type = 'AWS::SageMaker::UserProfile';

/**
 * Resource Type definition for AWS::SageMaker::UserProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html}
 */
export default function UserProfile(props: UserProfile_Properties) {
  return new CfnResource<UserProfile_Properties>(UserProfile_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::UserProfile {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html}
 */
export type UserProfile_Properties = {
  UserProfileArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-domainid}
   */
  DomainId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-singlesignonuseridentifier}
   */
  SingleSignOnUserIdentifier?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-singlesignonuservalue}
   */
  SingleSignOnUserValue?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-userprofilename}
   */
  UserProfileName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings}
   */
  UserSettings?: UserSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-tags}
   */
  Tags?: Tag[];
};

/**
 * A collection of settings that apply to users of Amazon SageMaker
 * Studio. These settings are specified when the CreateUserProfile API is
 * called, and as DefaultUserSettings when the CreateDomain API is
 * called. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html}
 */
export type UserSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-executionrole}
   */
  ExecutionRole?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-jupyterserverappsettings}
   */
  JupyterServerAppSettings?: JupyterServerAppSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-kernelgatewayappsettings}
   */
  KernelGatewayAppSettings?: KernelGatewayAppSettings;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-securitygroups}
   */
  SecurityGroups?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-usersettings.html#cfn-sagemaker-userprofile-usersettings-sharingsettings}
   */
  SharingSettings?: SharingSettings;
};

/**
 * The JupyterServer app settings. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html}
 */
export type JupyterServerAppSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-jupyterserverappsettings.html#cfn-sagemaker-userprofile-jupyterserverappsettings-defaultresourcespec}
   */
  DefaultResourceSpec?: ResourceSpec;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html}
 */
export type ResourceSpec = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-instancetype}
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
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-sagemakerimagearn}
   */
  SageMakerImageArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-resourcespec.html#cfn-sagemaker-userprofile-resourcespec-sagemakerimageversionarn}
   */
  SageMakerImageVersionArn?: Resolvable<string>;
};

/**
 * The kernel gateway app settings. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html}
 */
export type KernelGatewayAppSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-customimages}
   */
  CustomImages?: CustomImage[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-defaultresourcespec}
   */
  DefaultResourceSpec?: ResourceSpec;
};

/**
 * A custom SageMaker image. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html}
 */
export type CustomImage = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html#cfn-sagemaker-userprofile-customimage-appimageconfigname}
   */
  AppImageConfigName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html#cfn-sagemaker-userprofile-customimage-imagename}
   */
  ImageName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-customimage.html#cfn-sagemaker-userprofile-customimage-imageversionnumber}
   */
  ImageVersionNumber?: Resolvable<number>;
};

/**
 * Specifies options when sharing an Amazon SageMaker Studio notebook.
 * These settings are specified as part of DefaultUserSettings when the
 * CreateDomain API is called, and as part of UserSettings when the
 * CreateUserProfile API is called. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html}
 */
export type SharingSettings = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html#cfn-sagemaker-userprofile-sharingsettings-notebookoutputoption}
   */
  NotebookOutputOption?: Resolvable<'Allowed' | 'Disabled'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html#cfn-sagemaker-userprofile-sharingsettings-s3kmskeyid}
   */
  S3KmsKeyId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-userprofile-sharingsettings.html#cfn-sagemaker-userprofile-sharingsettings-s3outputpath}
   */
  S3OutputPath?: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
