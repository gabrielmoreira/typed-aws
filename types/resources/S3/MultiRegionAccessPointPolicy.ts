// CloudFormation Resource AWS::S3::MultiRegionAccessPointPolicy

import { CfnResource } from '../../base';

export type MultiRegionAccessPointPolicy_Type =
  'AWS::S3::MultiRegionAccessPointPolicy';
export const MultiRegionAccessPointPolicy_Type =
  'AWS::S3::MultiRegionAccessPointPolicy';

/**
 * The policy to be attached to a Multi Region Access Point {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html}
 */
export default function MultiRegionAccessPointPolicy(
  props: MultiRegionAccessPointPolicy_Properties
) {
  return new CfnResource<MultiRegionAccessPointPolicy_Properties>(
    MultiRegionAccessPointPolicy_Type,
    props
  );
}

/**
 * The policy to be attached to a Multi Region Access Point {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html}
 */
export type MultiRegionAccessPointPolicy_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#cfn-s3-multiregionaccesspointpolicy-mrapname}
   */
  MrapName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#cfn-s3-multiregionaccesspointpolicy-policy}
   */
  Policy: {
    [k: string]: unknown;
  };
  PolicyStatus?: {
    IsPublic: 'true' | 'false';
  };
};
