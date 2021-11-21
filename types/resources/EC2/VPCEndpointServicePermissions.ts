// CloudFormation Resource AWS::EC2::VPCEndpointServicePermissions

import { CFResource } from '../../base';

export type VPCEndpointServicePermissions_Type =
  'AWS::EC2::VPCEndpointServicePermissions';
export const VPCEndpointServicePermissions_Type =
  'AWS::EC2::VPCEndpointServicePermissions';

/**
 * Resource Type definition for AWS::EC2::VPCEndpointServicePermissions
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html}
 */
export default function VPCEndpointServicePermissions(
  props: VPCEndpointServicePermissions_Properties
) {
  return new CFResource<
    VPCEndpointServicePermissions_Type,
    VPCEndpointServicePermissions_Properties
  >(VPCEndpointServicePermissions_Type, props);
}

/**
 * Resource Type definition for AWS::EC2::VPCEndpointServicePermissions
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html}
 */
export type VPCEndpointServicePermissions_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html#cfn-ec2-vpcendpointservicepermissions-allowedprincipals}
   */
  AllowedPrincipals?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html#cfn-ec2-vpcendpointservicepermissions-serviceid}
   */
  ServiceId: string;
};