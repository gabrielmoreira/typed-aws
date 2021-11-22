// CloudFormation Resource AWS::Macie::CustomDataIdentifier

import { CfnResource, Resolvable } from '../../base';

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
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-regex}
   */
  Regex: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-maximummatchdistance}
   */
  MaximumMatchDistance?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-keywords}
   */
  Keywords?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-ignorewords}
   */
  IgnoreWords?: Resolvable<string>[];
  Id?: Resolvable<string>;
  Arn?: Resolvable<string>;
};
