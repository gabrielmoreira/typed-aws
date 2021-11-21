// CloudFormation Resource AWS::EventSchemas::RegistryPolicy

import { CfnResource } from '../../base';

export type RegistryPolicy_Type = 'AWS::EventSchemas::RegistryPolicy';
export const RegistryPolicy_Type = 'AWS::EventSchemas::RegistryPolicy';

/**
 * Resource Type definition for AWS::EventSchemas::RegistryPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html}
 */
export default function RegistryPolicy(props: RegistryPolicy_Properties) {
  return new CfnResource<RegistryPolicy_Properties>(RegistryPolicy_Type, props);
}

/**
 * Resource Type definition for AWS::EventSchemas::RegistryPolicy {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html}
 */
export type RegistryPolicy_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#cfn-eventschemas-registrypolicy-policy}
   */
  Policy: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#cfn-eventschemas-registrypolicy-registryname}
   */
  RegistryName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eventschemas-registrypolicy.html#cfn-eventschemas-registrypolicy-revisionid}
   */
  RevisionId?: string;
};
