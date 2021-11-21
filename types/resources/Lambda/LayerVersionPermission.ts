// CloudFormation Resource AWS::Lambda::LayerVersionPermission

import { CFResource } from '../../base';

export type LayerVersionPermission_Type = 'AWS::Lambda::LayerVersionPermission';
export const LayerVersionPermission_Type =
  'AWS::Lambda::LayerVersionPermission';

/**
 * Resource Type definition for AWS::Lambda::LayerVersionPermission
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html}
 */
export default function LayerVersionPermission(
  props: LayerVersionPermission_Properties
) {
  return new CFResource<
    LayerVersionPermission_Type,
    LayerVersionPermission_Properties
  >(LayerVersionPermission_Type, props);
}

/**
 * Resource Type definition for AWS::Lambda::LayerVersionPermission
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html}
 */
export type LayerVersionPermission_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-action}
   */
  Action: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-layerversionarn}
   */
  LayerVersionArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-organizationid}
   */
  OrganizationId?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-principal}
   */
  Principal: string;
};
