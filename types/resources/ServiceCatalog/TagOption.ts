// CloudFormation Resource AWS::ServiceCatalog::TagOption

import { CfnResource, Resolvable } from '../../base';

export type TagOption_Type = 'AWS::ServiceCatalog::TagOption';
export const TagOption_Type = 'AWS::ServiceCatalog::TagOption';

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html}
 */
export default function TagOption(props: TagOption_Properties) {
  return new CfnResource<TagOption_Properties>(TagOption_Type, props);
}

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html}
 */
export type TagOption_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-active}
   */
  Active?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-value}
   */
  Value: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-key}
   */
  Key: Resolvable<string>;
};
