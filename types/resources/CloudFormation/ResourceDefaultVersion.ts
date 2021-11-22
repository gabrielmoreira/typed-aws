// CloudFormation Resource AWS::CloudFormation::ResourceDefaultVersion

import { CfnResource, Resolvable } from '../../base';

export type ResourceDefaultVersion_Type =
  'AWS::CloudFormation::ResourceDefaultVersion';
export const ResourceDefaultVersion_Type =
  'AWS::CloudFormation::ResourceDefaultVersion';

export default function ResourceDefaultVersion(
  props: ResourceDefaultVersion_Properties
) {
  return new CfnResource<ResourceDefaultVersion_Properties>(
    ResourceDefaultVersion_Type,
    props
  );
}

export type ResourceDefaultVersion_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typeversionarn}
       */
      TypeVersionArn: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typename}
       */
      TypeName?: Resolvable<string>;
      Arn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-versionid}
       */
      VersionId?: Resolvable<string>;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typeversionarn}
       */
      TypeVersionArn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typename}
       */
      TypeName: Resolvable<string>;
      Arn?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-versionid}
       */
      VersionId: Resolvable<string>;
    };
