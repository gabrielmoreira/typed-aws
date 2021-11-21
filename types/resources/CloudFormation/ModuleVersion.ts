// CloudFormation Resource AWS::CloudFormation::ModuleVersion

import { CfnResource } from '../../base';

export type ModuleVersion_Type = 'AWS::CloudFormation::ModuleVersion';
export const ModuleVersion_Type = 'AWS::CloudFormation::ModuleVersion';

/**
 * A module that has been registered in the CloudFormation registry.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html}
 */
export default function ModuleVersion(props: ModuleVersion_Properties) {
  return new CfnResource<ModuleVersion_Properties>(ModuleVersion_Type, props);
}

/**
 * A module that has been registered in the CloudFormation registry.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html}
 */
export type ModuleVersion_Properties = {
  Arn?: string;
  Description?: string;
  DocumentationUrl?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#cfn-cloudformation-moduleversion-modulename}
   */
  ModuleName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#cfn-cloudformation-moduleversion-modulepackage}
   */
  ModulePackage: string;
  IsDefaultVersion?: boolean;
  Schema?: string;
  TimeCreated?: string;
  VersionId?: string;
  Visibility?: 'PRIVATE';
};
