// CloudFormation Resource AWS::SageMaker::Project

import { CFResource } from '../../base';

export type Project_Type = 'AWS::SageMaker::Project';
export const Project_Type = 'AWS::SageMaker::Project';

/**
 * Resource Type definition for AWS::SageMaker::Project {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export default function Project(props: Project_Properties) {
  return new CFResource<Project_Type, Project_Properties>(Project_Type, props);
}

/**
 * Resource Type definition for AWS::SageMaker::Project {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html}
 */
export type Project_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-tags}
   */
  Tags?: Tag[];
  ProjectArn?: ProjectArn;
  ProjectId?: ProjectId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-projectname}
   */
  ProjectName: ProjectName;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-projectdescription}
   */
  ProjectDescription?: ProjectDescription;
  CreationTime?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-project.html#cfn-sagemaker-project-servicecatalogprovisioningdetails}
   */
  ServiceCatalogProvisioningDetails: {
    ProductId: ProductId;
    ProvisioningArtifactId?: ProvisioningArtifactId;
    PathId?: PathId;
    ProvisioningParameters?: ProvisioningParameter[];
  };
  ServiceCatalogProvisionedProductDetails?: {
    ProvisionedProductId?: ProvisioningArtifactId;
    ProvisionedProductStatusMessage?: ProvisionedProductStatusMessage;
  };
  ProjectStatus?:
    | 'Pending'
    | 'CreateInProgress'
    | 'CreateCompleted'
    | 'CreateFailed'
    | 'DeleteInProgress'
    | 'DeleteFailed'
    | 'DeleteCompleted';
};

export type Tag = {
  Key: string;
  Value: string;
};

export type ProjectDescription = string;

export type ProjectId = string;

export type ProvisionedProductStatusMessage = string;

export type ProjectName = string;

export type ProjectArn = string;

export type ProductId = string;

export type ProvisioningArtifactId = string;

export type PathId = string;

export type ProvisioningParameter = {
  Key: string;
  Value: string;
};
