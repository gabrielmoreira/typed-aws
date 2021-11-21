// CloudFormation Resource AWS::ApiGatewayV2::VpcLink

import { CFResource } from '../../base';

export type VpcLink_Type = 'AWS::ApiGatewayV2::VpcLink';
export const VpcLink_Type = 'AWS::ApiGatewayV2::VpcLink';

/**
 * Resource Type definition for AWS::ApiGatewayV2::VpcLink {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html}
 */
export default function VpcLink(props: VpcLink_Properties) {
  return new CFResource<VpcLink_Type, VpcLink_Properties>(VpcLink_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGatewayV2::VpcLink {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html}
 */
export type VpcLink_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-subnetids}
   */
  SubnetIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-securitygroupids}
   */
  SecurityGroupIds?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-tags}
   */
  Tags?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-name}
   */
  Name: string;
};
