// CloudFormation Resource AWS::Detective::Graph

import { CfnResource, Resolvable } from '../../base';

export type Graph_Type = 'AWS::Detective::Graph';
export const Graph_Type = 'AWS::Detective::Graph';

/**
 * Resource schema for AWS::Detective::Graph {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html}
 */
export default function Graph(props: Graph_Properties) {
  return new CfnResource<Graph_Properties>(Graph_Type, props);
}

/**
 * Resource schema for AWS::Detective::Graph {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html}
 */
export type Graph_Properties = {
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};
