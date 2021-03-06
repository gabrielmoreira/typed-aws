// CloudFormation Resource AWS::IAM::OIDCProvider

import { CfnResource, Resolvable } from '../../base';

export type OIDCProvider_Type = 'AWS::IAM::OIDCProvider';
export const OIDCProvider_Type = 'AWS::IAM::OIDCProvider';

/**
 * Resource Type definition for AWS::IAM::OIDCProvider {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html}
 */
export default function OIDCProvider(props: OIDCProvider_Properties) {
  return new CfnResource<OIDCProvider_Properties>(OIDCProvider_Type, props);
}

/**
 * Resource Type definition for AWS::IAM::OIDCProvider {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html}
 */
export type OIDCProvider_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-clientidlist}
   */
  ClientIdList?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-url}
   */
  Url?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-thumbprintlist}
   */
  ThumbprintList: Resolvable<string>[];
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
