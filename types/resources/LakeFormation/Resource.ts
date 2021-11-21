// CloudFormation Resource AWS::LakeFormation::Resource

import { CFResource } from '../../base';

export type Resource_Type = 'AWS::LakeFormation::Resource';
export const Resource_Type = 'AWS::LakeFormation::Resource';

/**
 * Resource Type definition for AWS::LakeFormation::Resource {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html}
 */
export default function Resource(props: Resource_Properties) {
  return new CFResource<Resource_Type, Resource_Properties>(
    Resource_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::LakeFormation::Resource {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html}
 */
export type Resource_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-resourcearn}
   */
  ResourceArn: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-useservicelinkedrole}
   */
  UseServiceLinkedRole: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-resource.html#cfn-lakeformation-resource-rolearn}
   */
  RoleArn?: string;
};
