// CloudFormation Resource AWS::CodeBuild::SourceCredential

import { CfnResource, Resolvable } from '../../base';

export type SourceCredential_Type = 'AWS::CodeBuild::SourceCredential';
export const SourceCredential_Type = 'AWS::CodeBuild::SourceCredential';

/**
 * Resource Type definition for AWS::CodeBuild::SourceCredential {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html}
 */
export default function SourceCredential(props: SourceCredential_Properties) {
  return new CfnResource<SourceCredential_Properties>(
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
  ServerType: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-token}
   */
  Token: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-authtype}
   */
  AuthType: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-username}
   */
  Username?: Resolvable<string>;
};
