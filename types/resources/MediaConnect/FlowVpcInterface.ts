// CloudFormation Resource AWS::MediaConnect::FlowVpcInterface

import { CfnResource, Resolvable } from '../../base';

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
  FlowArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-rolearn}
   */
  RoleArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-securitygroupids}
   */
  SecurityGroupIds: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-subnetid}
   */
  SubnetId: Resolvable<string>;
  NetworkInterfaceIds?: Resolvable<string>[];
};
