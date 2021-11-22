// CloudFormation Resource AWS::CodeStarConnections::Connection

import { CfnResource, Resolvable } from '../../base';

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
  ConnectionArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-connectionname}
   */
  ConnectionName: Resolvable<string>;
  ConnectionStatus?: Resolvable<string>;
  OwnerAccountId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-providertype}
   */
  ProviderType?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-hostarn}
   */
  HostArn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
  [k: string]: unknown;
};
