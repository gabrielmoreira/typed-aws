// CloudFormation Resource AWS::Cassandra::Keyspace

import { CfnResource, Resolvable } from '../../base';

export type Keyspace_Type = 'AWS::Cassandra::Keyspace';
export const Keyspace_Type = 'AWS::Cassandra::Keyspace';

/**
 * Resource schema for AWS::Cassandra::Keyspace {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html}
 */
export default function Keyspace(props: Keyspace_Properties) {
  return new CfnResource<Keyspace_Properties>(Keyspace_Type, props);
}

/**
 * Resource schema for AWS::Cassandra::Keyspace {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html}
 */
export type Keyspace_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-keyspacename}
   */
  KeyspaceName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
