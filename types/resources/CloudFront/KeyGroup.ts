// CloudFormation Resource AWS::CloudFront::KeyGroup

import { CFResource } from '../../base';

export type KeyGroup_Type = 'AWS::CloudFront::KeyGroup';
export const KeyGroup_Type = 'AWS::CloudFront::KeyGroup';

/**
 * Resource Type definition for AWS::CloudFront::KeyGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export default function KeyGroup(props: KeyGroup_Properties) {
  return new CFResource<KeyGroup_Type, KeyGroup_Properties>(
    KeyGroup_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CloudFront::KeyGroup {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html}
 */
export type KeyGroup_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-keygroup.html#cfn-cloudfront-keygroup-keygroupconfig}
   */
  KeyGroupConfig: KeyGroupConfig;
  LastModifiedTime?: string;
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
  Comment?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html#cfn-cloudfront-keygroup-keygroupconfig-items}
   */
  Items: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-keygroup-keygroupconfig.html#cfn-cloudfront-keygroup-keygroupconfig-name}
   */
  Name: string;
};
