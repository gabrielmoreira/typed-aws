// CloudFormation Resource AWS::EC2::EgressOnlyInternetGateway

import { CFResource } from '../../base';

export type EgressOnlyInternetGateway_Type =
  'AWS::EC2::EgressOnlyInternetGateway';
export const EgressOnlyInternetGateway_Type =
  'AWS::EC2::EgressOnlyInternetGateway';

/**
 * Resource Type definition for AWS::EC2::EgressOnlyInternetGateway
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html}
 */
export default function EgressOnlyInternetGateway(
  props: EgressOnlyInternetGateway_Properties
) {
  return new CFResource<
    EgressOnlyInternetGateway_Type,
    EgressOnlyInternetGateway_Properties
  >(EgressOnlyInternetGateway_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::EgressOnlyInternetGateway
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html}
 */
export type EgressOnlyInternetGateway_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-egressonlyinternetgateway.html#cfn-ec2-egressonlyinternetgateway-vpcid}
   */
  VpcId: string;
};
