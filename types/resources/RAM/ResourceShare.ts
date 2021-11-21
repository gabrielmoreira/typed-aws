// CloudFormation Resource AWS::RAM::ResourceShare

import { CFResource } from '../../base';

export type ResourceShare_Type = 'AWS::RAM::ResourceShare';
export const ResourceShare_Type = 'AWS::RAM::ResourceShare';

/**
 * Resource Type definition for AWS::RAM::ResourceShare {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html}
 */
export default function ResourceShare(props: ResourceShare_Properties) {
  return new CFResource<ResourceShare_Type, ResourceShare_Properties>(
    ResourceShare_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::RAM::ResourceShare {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html}
 */
export type ResourceShare_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-permissionarns}
   */
  PermissionArns?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-principals}
   */
  Principals?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-allowexternalprincipals}
   */
  AllowExternalPrincipals?: boolean;
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-resourcearns}
   */
  ResourceArns?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-resourceshare.html#cfn-ram-resourceshare-name}
   */
  Name: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
