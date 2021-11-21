// CloudFormation Resource AWS::CloudFormation::ResourceDefaultVersion

import { CFResource } from '../../base';

export type ResourceDefaultVersion_Type =
  'AWS::CloudFormation::ResourceDefaultVersion';
export const ResourceDefaultVersion_Type =
  'AWS::CloudFormation::ResourceDefaultVersion';

export default function ResourceDefaultVersion(
  props: ResourceDefaultVersion_Properties
) {
  return new CFResource<
    ResourceDefaultVersion_Type,
    ResourceDefaultVersion_Properties
  >(ResourceDefaultVersion_Type, props);
}

export type ResourceDefaultVersion_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typeversionarn}
       */
      TypeVersionArn: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typename}
       */
      TypeName?: string;
      Arn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-versionid}
       */
      VersionId?: string;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typeversionarn}
       */
      TypeVersionArn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typename}
       */
      TypeName: string;
      Arn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-versionid}
       */
      VersionId: string;
    };
