// CloudFormation Resource AWS::AppStream::StackFleetAssociation

import { CfnResource, Resolvable } from '../../base';

export type StackFleetAssociation_Type =
  'AWS::AppStream::StackFleetAssociation';
export const StackFleetAssociation_Type =
  'AWS::AppStream::StackFleetAssociation';

/**
 * Resource Type definition for AWS::AppStream::StackFleetAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html}
 */
export default function StackFleetAssociation(
  props: StackFleetAssociation_Properties
) {
  return new CfnResource<StackFleetAssociation_Properties>(
    StackFleetAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::AppStream::StackFleetAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html}
 */
export type StackFleetAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-fleetname}
   */
  FleetName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-stackname}
   */
  StackName: Resolvable<string>;
  Id?: Resolvable<string>;
};
