// CloudFormation Resource AWS::Lambda::Version

import { CfnResource } from '../../base';

export type Version_Type = 'AWS::Lambda::Version';
export const Version_Type = 'AWS::Lambda::Version';

/**
 * Resource Type definition for AWS::Lambda::Version {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html}
 */
export default function Version(props: Version_Properties) {
  return new CfnResource<Version_Properties>(Version_Type, props);
}

/**
 * Resource Type definition for AWS::Lambda::Version {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html}
 */
export type Version_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-functionname}
   */
  FunctionName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-provisionedconcurrencyconfig}
   */
  ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-description}
   */
  Description?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-codesha256}
   */
  CodeSha256?: string;
  Version?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html}
 */
export type ProvisionedConcurrencyConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html#cfn-lambda-version-provisionedconcurrencyconfiguration-provisionedconcurrentexecutions}
   */
  ProvisionedConcurrentExecutions: number;
};
