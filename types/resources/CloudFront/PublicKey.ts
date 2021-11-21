// CloudFormation Resource AWS::CloudFront::PublicKey

import { CFResource } from '../../base';

export type PublicKey_Type = 'AWS::CloudFront::PublicKey';
export const PublicKey_Type = 'AWS::CloudFront::PublicKey';

/**
 * Resource Type definition for AWS::CloudFront::PublicKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export default function PublicKey(props: PublicKey_Properties) {
  return new CFResource<PublicKey_Type, PublicKey_Properties>(
    PublicKey_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CloudFront::PublicKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-publickey.html}
 */
export type PublicKey_Properties = {
  CreatedTime?: string;
  Id?: string;
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
  CallerReference: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-comment}
   */
  Comment?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-encodedkey}
   */
  EncodedKey: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-publickey-publickeyconfig.html#cfn-cloudfront-publickey-publickeyconfig-name}
   */
  Name: string;
};
