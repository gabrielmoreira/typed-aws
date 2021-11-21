// CloudFormation Resource AWS::CloudFormation::ModuleDefaultVersion

import { CFResource } from '../../base';

export type ModuleDefaultVersion_Type =
  'AWS::CloudFormation::ModuleDefaultVersion';
export const ModuleDefaultVersion_Type =
  'AWS::CloudFormation::ModuleDefaultVersion';

export default function ModuleDefaultVersion(
  props: ModuleDefaultVersion_Properties
) {
  return new CFResource<
    ModuleDefaultVersion_Type,
    ModuleDefaultVersion_Properties
  >(ModuleDefaultVersion_Type, props);
}

export type ModuleDefaultVersion_Properties =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-arn}
       */
      Arn: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-modulename}
       */
      ModuleName?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-versionid}
       */
      VersionId?: string;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-arn}
       */
      Arn?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-modulename}
       */
      ModuleName: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-versionid}
       */
      VersionId: string;
    };