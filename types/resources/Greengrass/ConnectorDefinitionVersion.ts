// CloudFormation Resource AWS::Greengrass::ConnectorDefinitionVersion

import { CFResource } from '../../base';

export type ConnectorDefinitionVersion_Type =
  'AWS::Greengrass::ConnectorDefinitionVersion';
export const ConnectorDefinitionVersion_Type =
  'AWS::Greengrass::ConnectorDefinitionVersion';

/**
 * Resource Type definition for
 * AWS::Greengrass::ConnectorDefinitionVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html}
 */
export default function ConnectorDefinitionVersion(
  props: ConnectorDefinitionVersion_Properties
) {
  return new CFResource<
    ConnectorDefinitionVersion_Type,
    ConnectorDefinitionVersion_Properties
  >(ConnectorDefinitionVersion_Type, props);
}

/**
 * Resource Type definition for
 * AWS::Greengrass::ConnectorDefinitionVersion {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html}
 */
export type ConnectorDefinitionVersion_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html#cfn-greengrass-connectordefinitionversion-connectors}
   */
  Connectors: Connector[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html#cfn-greengrass-connectordefinitionversion-connectordefinitionid}
   */
  ConnectorDefinitionId: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html}
 */
export type Connector = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html#cfn-greengrass-connectordefinitionversion-connector-connectorarn}
   */
  ConnectorArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html#cfn-greengrass-connectordefinitionversion-connector-parameters}
   */
  Parameters?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinitionversion-connector.html#cfn-greengrass-connectordefinitionversion-connector-id}
   */
  Id: string;
};
