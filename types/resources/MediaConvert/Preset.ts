// CloudFormation Resource AWS::MediaConvert::Preset

import { CfnResource } from '../../base';

export type Preset_Type = 'AWS::MediaConvert::Preset';
export const Preset_Type = 'AWS::MediaConvert::Preset';

/**
 * Resource Type definition for AWS::MediaConvert::Preset {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html}
 */
export default function Preset(props: Preset_Properties) {
  return new CfnResource<Preset_Properties>(Preset_Type, props);
}

/**
 * Resource Type definition for AWS::MediaConvert::Preset {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html}
 */
export type Preset_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-category}
   */
  Category?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-settingsjson}
   */
  SettingsJson: {
    [k: string]: unknown;
  };
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-tags}
   */
  Tags?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-name}
   */
  Name?: string;
};
