// CloudFormation Resource AWS::EC2::NetworkInterfacePermission

import { CfnResource, Resolvable } from '../../base';

export type NetworkInterfacePermission_Type =
  'AWS::EC2::NetworkInterfacePermission';
export const NetworkInterfacePermission_Type =
  'AWS::EC2::NetworkInterfacePermission';

/**
 * Resource Type definition for AWS::EC2::NetworkInterfacePermission
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html}
 */
export default function NetworkInterfacePermission(
  props: NetworkInterfacePermission_Properties
) {
  return new CfnResource<NetworkInterfacePermission_Properties>(
    NetworkInterfacePermission_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::NetworkInterfacePermission
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html}
 */
export type NetworkInterfacePermission_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#cfn-ec2-networkinterfacepermission-awsaccountid}
   */
  AwsAccountId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#cfn-ec2-networkinterfacepermission-networkinterfaceid}
   */
  NetworkInterfaceId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#cfn-ec2-networkinterfacepermission-permission}
   */
  Permission: Resolvable<string>;
};
