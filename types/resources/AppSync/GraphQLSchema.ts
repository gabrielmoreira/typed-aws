// CloudFormation Resource AWS::AppSync::GraphQLSchema

import { CfnResource, Resolvable } from '../../base';

export type GraphQLSchema_Type = 'AWS::AppSync::GraphQLSchema';
export const GraphQLSchema_Type = 'AWS::AppSync::GraphQLSchema';

/**
 * Resource Type definition for AWS::AppSync::GraphQLSchema {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html}
 */
export default function GraphQLSchema(props: GraphQLSchema_Properties) {
  return new CfnResource<GraphQLSchema_Properties>(GraphQLSchema_Type, props);
}

/**
 * Resource Type definition for AWS::AppSync::GraphQLSchema {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html}
 */
export type GraphQLSchema_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#cfn-appsync-graphqlschema-definition}
   */
  Definition?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#cfn-appsync-graphqlschema-definitions3location}
   */
  DefinitionS3Location?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#cfn-appsync-graphqlschema-apiid}
   */
  ApiId: Resolvable<string>;
};
