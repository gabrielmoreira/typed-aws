// CloudFormation Resource AWS::CloudFront::PublicKey

import { CfnResource, Resolvable } from '../../base';

export type PublicKey_Type = 'AWS::CloudFront::PublicKey';
export const PublicKey_Type = 'AWS::CloudFront::PublicKey';

/**
 * Resource Type definition for AWS::CloudFront::PublicKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export default function PublicKey(props: PublicKey_Properties) {
  return new CfnResource<PublicKey_Properties>(PublicKey_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFront::PublicKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export type PublicKey_Properties = {
  CreatedTime?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html#cfn-cloudfront-publickey-publickeyconfig}
   */
  PublicKeyConfig: PublicKeyConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html}
 */
export type PublicKeyConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-callerreference}
   */
  CallerReference: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-comment}
   */
  Comment?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-encodedkey}
   */
  EncodedKey: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-name}
   */
  Name: Resolvable<string>;
};
