// CloudFormation Resource AWS::ServiceCatalog::TagOption

import { CFResource } from '../../base';

export type TagOption_Type = 'AWS::ServiceCatalog::TagOption';
export const TagOption_Type = 'AWS::ServiceCatalog::TagOption';

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html}
 */
export default function TagOption(props: TagOption_Properties) {
  return new CFResource<TagOption_Type, TagOption_Properties>(
    TagOption_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ServiceCatalog::TagOption {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html}
 */
export type TagOption_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-active}
   */
  Active?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-value}
   */
  Value: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoption.html#cfn-servicecatalog-tagoption-key}
   */
  Key: string;
};
