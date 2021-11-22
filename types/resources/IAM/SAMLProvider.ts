// CloudFormation Resource AWS::IAM::SAMLProvider

import { CfnResource, Resolvable } from '../../base';

export type SAMLProvider_Type = 'AWS::IAM::SAMLProvider';
export const SAMLProvider_Type = 'AWS::IAM::SAMLProvider';

/**
 * Resource Type definition for AWS::IAM::SAMLProvider {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html}
 */
export default function SAMLProvider(props: SAMLProvider_Properties) {
  return new CfnResource<SAMLProvider_Properties>(SAMLProvider_Type, props);
}

/**
 * Resource Type definition for AWS::IAM::SAMLProvider {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html}
 */
export type SAMLProvider_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html#cfn-iam-samlprovider-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html#cfn-iam-samlprovider-samlmetadatadocument}
   */
  SamlMetadataDocument: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-samlprovider.html#cfn-iam-samlprovider-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Value: Resolvable<string>;
  Key: Resolvable<string>;
};
