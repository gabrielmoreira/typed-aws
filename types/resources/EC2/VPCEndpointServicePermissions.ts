// CloudFormation Resource AWS::EC2::VPCEndpointServicePermissions

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<VPCEndpointServicePermissions_Properties>(
    VPCEndpointServicePermissions_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EC2::VPCEndpointServicePermissions
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html}
 */
export type VPCEndpointServicePermissions_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html#cfn-ec2-vpcendpointservicepermissions-allowedprincipals}
   */
  AllowedPrincipals?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservicepermissions.html#cfn-ec2-vpcendpointservicepermissions-serviceid}
   */
  ServiceId: Resolvable<string>;
};
