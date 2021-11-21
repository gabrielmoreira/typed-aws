// CloudFormation Resource AWS::MediaConnect::FlowVpcInterface

import { CfnResource } from '../../base';

export type FlowVpcInterface_Type = 'AWS::MediaConnect::FlowVpcInterface';
export const FlowVpcInterface_Type = 'AWS::MediaConnect::FlowVpcInterface';

/**
 * Resource schema for AWS::MediaConnect::FlowVpcInterface {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html}
 */
export default function FlowVpcInterface(props: FlowVpcInterface_Properties) {
  return new CfnResource<FlowVpcInterface_Properties>(
    FlowVpcInterface_Type,
    props
  );
}

/**
 * Resource schema for AWS::MediaConnect::FlowVpcInterface {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html}
 */
export type FlowVpcInterface_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-flowarn}
   */
  FlowArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-rolearn}
   */
  RoleArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-securitygroupids}
   */
  SecurityGroupIds: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-subnetid}
   */
  SubnetId: string;
  NetworkInterfaceIds?: string[];
};
