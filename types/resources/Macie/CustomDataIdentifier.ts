// CloudFormation Resource AWS::Macie::CustomDataIdentifier

import { CfnResource } from '../../base';

export type CustomDataIdentifier_Type = 'AWS::Macie::CustomDataIdentifier';
export const CustomDataIdentifier_Type = 'AWS::Macie::CustomDataIdentifier';

/**
 * Macie CustomDataIdentifier resource schema {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html}
 */
export default function CustomDataIdentifier(
  props: CustomDataIdentifier_Properties
) {
  return new CfnResource<CustomDataIdentifier_Properties>(
    CustomDataIdentifier_Type,
    props
  );
}

/**
 * Macie CustomDataIdentifier resource schema {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html}
 */
export type CustomDataIdentifier_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-regex}
   */
  Regex: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-maximummatchdistance}
   */
  MaximumMatchDistance?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-keywords}
   */
  Keywords?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-ignorewords}
   */
  IgnoreWords?: string[];
  Id?: string;
  Arn?: string;
};
