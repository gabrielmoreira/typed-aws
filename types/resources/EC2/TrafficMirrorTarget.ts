// CloudFormation Resource AWS::EC2::TrafficMirrorTarget

import { CFResource } from '../../base';

export type TrafficMirrorTarget_Type = 'AWS::EC2::TrafficMirrorTarget';
export const TrafficMirrorTarget_Type = 'AWS::EC2::TrafficMirrorTarget';

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html}
 */
export default function TrafficMirrorTarget(
  props: TrafficMirrorTarget_Properties
) {
  return new CFResource<
    TrafficMirrorTarget_Type,
    TrafficMirrorTarget_Properties
  >(TrafficMirrorTarget_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorTarget {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html}
 */
export type TrafficMirrorTarget_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-networkloadbalancerarn}
   */
  NetworkLoadBalancerArn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-networkinterfaceid}
   */
  NetworkInterfaceId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrortarget.html#cfn-ec2-trafficmirrortarget-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
