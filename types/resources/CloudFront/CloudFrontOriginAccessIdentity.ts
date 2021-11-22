// CloudFormation Resource AWS::CloudFront::CloudFrontOriginAccessIdentity

import { CfnResource, Resolvable } from '../../base';

export type CloudFrontOriginAccessIdentity_Type =
  'AWS::CloudFront::CloudFrontOriginAccessIdentity';
export const CloudFrontOriginAccessIdentity_Type =
  'AWS::CloudFront::CloudFrontOriginAccessIdentity';

/**
 * Resource Type definition for
 * AWS::CloudFront::CloudFrontOriginAccessIdentity {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html}
 */
export default function CloudFrontOriginAccessIdentity(
  props: CloudFrontOriginAccessIdentity_Properties
) {
  return new CfnResource<CloudFrontOriginAccessIdentity_Properties>(
    CloudFrontOriginAccessIdentity_Type,
    props
  );
}

/**
 * Resource Type definition for
 * AWS::CloudFront::CloudFrontOriginAccessIdentity {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html}
 */
export type CloudFrontOriginAccessIdentity_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-cloudfrontoriginaccessidentity.html#cfn-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig}
   */
  CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
  Id?: Resolvable<string>;
  S3CanonicalUserId?: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig.html}
 */
export type CloudFrontOriginAccessIdentityConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig.html#cfn-cloudfront-cloudfrontoriginaccessidentity-cloudfrontoriginaccessidentityconfig-comment}
   */
  Comment: Resolvable<string>;
};
