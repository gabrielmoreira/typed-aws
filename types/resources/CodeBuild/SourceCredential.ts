// CloudFormation Resource AWS::CodeBuild::SourceCredential

import { CFResource } from '../../base';

export type SourceCredential_Type = 'AWS::CodeBuild::SourceCredential';
export const SourceCredential_Type = 'AWS::CodeBuild::SourceCredential';

/**
 * Resource Type definition for AWS::CodeBuild::SourceCredential {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html}
 */
export default function SourceCredential(props: SourceCredential_Properties) {
  return new CFResource<SourceCredential_Type, SourceCredential_Properties>(
    SourceCredential_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CodeBuild::SourceCredential {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html}
 */
export type SourceCredential_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-servertype}
   */
  ServerType: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-token}
   */
  Token: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-authtype}
   */
  AuthType: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-username}
   */
  Username?: string;
};
