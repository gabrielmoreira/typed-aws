// CloudFormation Resource AWS::Lambda::LayerVersionPermission

import { CfnResource, Resolvable } from '../../base';

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
  return new CfnResource<LayerVersionPermission_Properties>(
    LayerVersionPermission_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Lambda::LayerVersionPermission
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html}
 */
export type LayerVersionPermission_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-action}
   */
  Action: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-layerversionarn}
   */
  LayerVersionArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-organizationid}
   */
  OrganizationId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-principal}
   */
  Principal: Resolvable<string>;
};
