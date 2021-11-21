// CloudFormation Resource AWS::ApiGateway::VpcLink

import { CfnResource } from '../../base';

export type VpcLink_Type = 'AWS::ApiGateway::VpcLink';
export const VpcLink_Type = 'AWS::ApiGateway::VpcLink';

/**
 * Resource Type definition for AWS::ApiGateway::VpcLink {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html}
 */
export default function VpcLink(props: VpcLink_Properties) {
  return new CfnResource<VpcLink_Properties>(VpcLink_Type, props);
}

/**
 * Resource Type definition for AWS::ApiGateway::VpcLink {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html}
 */
export type VpcLink_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-description}
   */
  Description?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-targetarns}
   */
  TargetArns: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-name}
   */
  Name: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
