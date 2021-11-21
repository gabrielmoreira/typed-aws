// CloudFormation Resource AWS::LicenseManager::Grant

import { CFResource } from '../../base';

export type Grant_Type = 'AWS::LicenseManager::Grant';
export const Grant_Type = 'AWS::LicenseManager::Grant';

/**
 * An example resource schema demonstrating some basic constructs and
 * validation rules. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html}
 */
export default function Grant(props: Grant_Properties) {
  return new CFResource<Grant_Type, Grant_Properties>(Grant_Type, props);
}

/**
 * An example resource schema demonstrating some basic constructs and
 * validation rules. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html}
 */
export type Grant_Properties = {
  GrantArn?: Arn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-grantname}
   */
  GrantName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-licensearn}
   */
  LicenseArn?: Arn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-homeregion}
   */
  HomeRegion?: string;
  Version?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-allowedoperations}
   */
  AllowedOperations?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-principals}
   */
  Principals?: Arn[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-status}
   */
  Status?: string;
};

export type Arn = string;
