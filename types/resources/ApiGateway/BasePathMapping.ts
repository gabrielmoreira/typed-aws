// CloudFormation Resource AWS::ApiGateway::BasePathMapping

import { CfnResource } from '../../base';

export type BasePathMapping_Type = 'AWS::ApiGateway::BasePathMapping';
export const BasePathMapping_Type = 'AWS::ApiGateway::BasePathMapping';

/**
 * Resource Type definition for AWS::ApiGateway::BasePathMapping {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html}
 */
export default function BasePathMapping(props: BasePathMapping_Properties) {
  return new CfnResource<BasePathMapping_Properties>(
    BasePathMapping_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGateway::BasePathMapping {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html}
 */
export type BasePathMapping_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-basepath}
   */
  BasePath?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-domainname}
   */
  DomainName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-restapiid}
   */
  RestApiId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-stage}
   */
  Stage?: string;
};
