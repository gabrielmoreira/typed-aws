// CloudFormation Resource AWS::S3Outposts::AccessPoint

import { CfnResource, Resolvable } from '../../base';

export type AccessPoint_Type = 'AWS::S3Outposts::AccessPoint';
export const AccessPoint_Type = 'AWS::S3Outposts::AccessPoint';

/**
 * Resource Type Definition for AWS::S3Outposts::AccessPoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html}
 */
export default function AccessPoint(props: AccessPoint_Properties) {
  return new CfnResource<AccessPoint_Properties>(AccessPoint_Type, props);
}

/**
 * Resource Type Definition for AWS::S3Outposts::AccessPoint {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html}
 */
export type AccessPoint_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-bucket}
   */
  Bucket: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-vpcconfiguration}
   */
  VpcConfiguration: VpcConfiguration;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-policy}
   */
  Policy?: {
    [k: string]: unknown;
  };
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html}
 */
export type VpcConfiguration = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html#cfn-s3outposts-accesspoint-vpcconfiguration-vpcid}
   */
  VpcId?: Resolvable<string>;
};
