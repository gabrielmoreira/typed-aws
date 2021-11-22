// CloudFormation Resource AWS::CloudFront::KeyGroup

import { CfnResource, Resolvable } from '../../base';

export type KeyGroup_Type = 'AWS::CloudFront::KeyGroup';
export const KeyGroup_Type = 'AWS::CloudFront::KeyGroup';

/**
 * Resource Type definition for AWS::CloudFront::KeyGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export default function KeyGroup(props: KeyGroup_Properties) {
  return new CfnResource<KeyGroup_Properties>(KeyGroup_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFront::KeyGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export type KeyGroup_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html#cfn-cloudfront-keygroup-keygroupconfig}
   */
  KeyGroupConfig: KeyGroupConfig;
  LastModifiedTime?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html}
 */
export type KeyGroupConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html#cfn-cloudfront-keygroup-keygroupconfig-comment}
   */
  Comment?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html#cfn-cloudfront-keygroup-keygroupconfig-items}
   */
  Items: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html#cfn-cloudfront-keygroup-keygroupconfig-name}
   */
  Name: Resolvable<string>;
};
