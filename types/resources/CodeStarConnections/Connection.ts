// CloudFormation Resource AWS::CodeStarConnections::Connection

import { CfnResource } from '../../base';

export type Connection_Type = 'AWS::CodeStarConnections::Connection';
export const Connection_Type = 'AWS::CodeStarConnections::Connection';

/**
 * Schema for AWS::CodeStarConnections::Connection resource which can be
 * used to connect external source providers with AWS CodePipeline {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html}
 */
export default function Connection(props: Connection_Properties) {
  return new CfnResource<Connection_Properties>(Connection_Type, props);
}

/**
 * Schema for AWS::CodeStarConnections::Connection resource which can be
 * used to connect external source providers with AWS CodePipeline {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html}
 */
export type Connection_Properties = {
  ConnectionArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-connectionname}
   */
  ConnectionName: string;
  ConnectionStatus?: string;
  OwnerAccountId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-providertype}
   */
  ProviderType?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-hostarn}
   */
  HostArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
  [k: string]: unknown;
};
