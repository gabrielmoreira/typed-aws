// CloudFormation Resource AWS::CloudFormation::ResourceVersion

import { CFResource } from '../../base';

export type ResourceVersion_Type = 'AWS::CloudFormation::ResourceVersion';
export const ResourceVersion_Type = 'AWS::CloudFormation::ResourceVersion';

/**
 * A resource that has been registered in the CloudFormation Registry.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html}
 */
export default function ResourceVersion(props: ResourceVersion_Properties) {
  return new CFResource<ResourceVersion_Type, ResourceVersion_Properties>(
    ResourceVersion_Type,
    props
  );
}

/**
 * A resource that has been registered in the CloudFormation Registry.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html}
 */
export type ResourceVersion_Properties = {
  Arn?: string;
  TypeArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-executionrolearn}
   */
  ExecutionRoleArn?: string;
  IsDefaultVersion?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-loggingconfig}
   */
  LoggingConfig?: LoggingConfig;
  ProvisioningType?: 'NON_PROVISIONABLE' | 'IMMUTABLE' | 'FULLY_MUTABLE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-schemahandlerpackage}
   */
  SchemaHandlerPackage: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-typename}
   */
  TypeName: string;
  VersionId?: string;
  Visibility?: 'PUBLIC' | 'PRIVATE';
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html}
 */
export type LoggingConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html#cfn-cloudformation-resourceversion-loggingconfig-loggroupname}
   */
  LogGroupName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html#cfn-cloudformation-resourceversion-loggingconfig-logrolearn}
   */
  LogRoleArn?: string;
};
