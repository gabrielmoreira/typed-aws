// CloudFormation Resource AWS::Greengrass::GroupVersion

import { CFResource } from '../../base';

export type GroupVersion_Type = 'AWS::Greengrass::GroupVersion';
export const GroupVersion_Type = 'AWS::Greengrass::GroupVersion';

/**
 * Resource Type definition for AWS::Greengrass::GroupVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html}
 */
export default function GroupVersion(props: GroupVersion_Properties) {
  return new CFResource<GroupVersion_Type, GroupVersion_Properties>(
    GroupVersion_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Greengrass::GroupVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html}
 */
export type GroupVersion_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-loggerdefinitionversionarn}
   */
  LoggerDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-devicedefinitionversionarn}
   */
  DeviceDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-functiondefinitionversionarn}
   */
  FunctionDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-coredefinitionversionarn}
   */
  CoreDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-resourcedefinitionversionarn}
   */
  ResourceDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-connectordefinitionversionarn}
   */
  ConnectorDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-subscriptiondefinitionversionarn}
   */
  SubscriptionDefinitionVersionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html#cfn-greengrass-groupversion-groupid}
   */
  GroupId: string;
};
