// CloudFormation Resource AWS::Config::StoredQuery

import { CfnResource } from '../../base';

export type StoredQuery_Type = 'AWS::Config::StoredQuery';
export const StoredQuery_Type = 'AWS::Config::StoredQuery';

/**
 * Resource Type definition for AWS::Config::StoredQuery {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html}
 */
export default function StoredQuery(props: StoredQuery_Properties) {
  return new CfnResource<StoredQuery_Properties>(StoredQuery_Type, props);
}

/**
 * Resource Type definition for AWS::Config::StoredQuery {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html}
 */
export type StoredQuery_Properties = {
  QueryArn?: string;
  QueryId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-queryname}
   */
  QueryName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-querydescription}
   */
  QueryDescription?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-queryexpression}
   */
  QueryExpression: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-storedquery.html#cfn-config-storedquery-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
