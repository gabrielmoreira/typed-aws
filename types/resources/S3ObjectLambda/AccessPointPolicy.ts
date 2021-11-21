// CloudFormation Resource AWS::S3ObjectLambda::AccessPointPolicy

import { CFResource } from '../../base';

export type AccessPointPolicy_Type = 'AWS::S3ObjectLambda::AccessPointPolicy';
export const AccessPointPolicy_Type = 'AWS::S3ObjectLambda::AccessPointPolicy';

/**
 * AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon
 * S3ObjectLambda policy type that you can use to control permissions for
 * your S3ObjectLambda {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html}
 */
export default function AccessPointPolicy(props: AccessPointPolicy_Properties) {
  return new CFResource<AccessPointPolicy_Type, AccessPointPolicy_Properties>(
    AccessPointPolicy_Type,
    props
  );
}

/**
 * AWS::S3ObjectLambda::AccessPointPolicy resource is an Amazon
 * S3ObjectLambda policy type that you can use to control permissions for
 * your S3ObjectLambda {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html}
 */
export type AccessPointPolicy_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html#cfn-s3objectlambda-accesspointpolicy-objectlambdaaccesspoint}
   */
  ObjectLambdaAccessPoint: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html#cfn-s3objectlambda-accesspointpolicy-policydocument}
   */
  PolicyDocument: {
    [k: string]: unknown;
  };
};
