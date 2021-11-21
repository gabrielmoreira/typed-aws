// CloudFormation Resource AWS::Lambda::CodeSigningConfig

import { CfnResource } from '../../base';

export type CodeSigningConfig_Type = 'AWS::Lambda::CodeSigningConfig';
export const CodeSigningConfig_Type = 'AWS::Lambda::CodeSigningConfig';

/**
 * Resource Type definition for AWS::Lambda::CodeSigningConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html}
 */
export default function CodeSigningConfig(props: CodeSigningConfig_Properties) {
  return new CfnResource<CodeSigningConfig_Properties>(
    CodeSigningConfig_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Lambda::CodeSigningConfig. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html}
 */
export type CodeSigningConfig_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-allowedpublishers}
   */
  AllowedPublishers: AllowedPublishers;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-codesigningpolicies}
   */
  CodeSigningPolicies?: CodeSigningPolicies;
  CodeSigningConfigId?: string;
  CodeSigningConfigArn?: string;
};

/**
 * When the CodeSigningConfig is later on attached to a function, the
 * function code will be expected to be signed by profiles from this list
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-allowedpublishers.html}
 */
export type AllowedPublishers = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-allowedpublishers.html#cfn-lambda-codesigningconfig-allowedpublishers-signingprofileversionarns}
   */
  SigningProfileVersionArns: string[];
};

/**
 * Policies to control how to act if a signature is invalid {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-codesigningpolicies.html}
 */
export type CodeSigningPolicies = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-codesigningpolicies.html#cfn-lambda-codesigningconfig-codesigningpolicies-untrustedartifactondeployment}
   */
  UntrustedArtifactOnDeployment: 'Warn' | 'Enforce';
};
