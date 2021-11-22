// CloudFormation Resource AWS::SageMaker::FeatureGroup

import { CfnResource, Resolvable } from '../../base';

export type FeatureGroup_Type = 'AWS::SageMaker::FeatureGroup';
export const FeatureGroup_Type = 'AWS::SageMaker::FeatureGroup';

/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html}
 */
export default function FeatureGroup(props: FeatureGroup_Properties) {
  return new CfnResource<FeatureGroup_Properties>(FeatureGroup_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::FeatureGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html}
 */
export type FeatureGroup_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuregroupname}
   */
  FeatureGroupName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-recordidentifierfeaturename}
   */
  RecordIdentifierFeatureName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-eventtimefeaturename}
   */
  EventTimeFeatureName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuredefinitions}
   */
  FeatureDefinitions: FeatureDefinition[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig}
   */
  OnlineStoreConfig?: {
    SecurityConfig?: OnlineStoreSecurityConfig;
    EnableOnlineStore?: Resolvable<boolean>;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig}
   */
  OfflineStoreConfig?: {
    S3StorageConfig: S3StorageConfig;
    DisableGlueTableCreation?: Resolvable<boolean>;
    DataCatalogConfig?: DataCatalogConfig;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-rolearn}
   */
  RoleArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-tags}
   */
  Tags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html}
 */
export type FeatureDefinition = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html#cfn-sagemaker-featuregroup-featuredefinition-featurename}
   */
  FeatureName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-featuregroup-featuredefinition.html#cfn-sagemaker-featuregroup-featuredefinition-featuretype}
   */
  FeatureType: Resolvable<'Integral' | 'Fractional' | 'String'>;
};

export type KmsKeyId = Resolvable<string>;

export type OnlineStoreSecurityConfig = {
  KmsKeyId?: KmsKeyId;
};

export type S3StorageConfig = {
  S3Uri: Resolvable<string>;
  KmsKeyId?: KmsKeyId;
};

export type DataCatalogConfig = {
  TableName: Resolvable<string>;
  Catalog: Resolvable<string>;
  Database: Resolvable<string>;
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
