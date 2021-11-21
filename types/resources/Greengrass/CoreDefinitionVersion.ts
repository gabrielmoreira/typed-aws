// CloudFormation Resource AWS::Greengrass::CoreDefinitionVersion

import { CfnResource } from '../../base';

export type CoreDefinitionVersion_Type =
  'AWS::Greengrass::CoreDefinitionVersion';
export const CoreDefinitionVersion_Type =
  'AWS::Greengrass::CoreDefinitionVersion';

/**
 * Resource Type definition for AWS::Greengrass::CoreDefinitionVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html}
 */
export default function CoreDefinitionVersion(
  props: CoreDefinitionVersion_Properties
) {
  return new CfnResource<CoreDefinitionVersion_Properties>(
    CoreDefinitionVersion_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Greengrass::CoreDefinitionVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html}
 */
export type CoreDefinitionVersion_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html#cfn-greengrass-coredefinitionversion-cores}
   */
  Cores: Core[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html#cfn-greengrass-coredefinitionversion-coredefinitionid}
   */
  CoreDefinitionId: string;
  Id?: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html}
 */
export type Core = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-syncshadow}
   */
  SyncShadow?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-thingarn}
   */
  ThingArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-id}
   */
  Id: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinitionversion-core.html#cfn-greengrass-coredefinitionversion-core-certificatearn}
   */
  CertificateArn: string;
};
