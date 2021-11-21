// CloudFormation Resource AWS::AppStream::StackFleetAssociation

import { CFResource } from '../../base';

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
  return new CFResource<
    StackFleetAssociation_Type,
    StackFleetAssociation_Properties
  >(StackFleetAssociation_Type, props);
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
  FleetName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-stackname}
   */
  StackName: string;
  Id?: string;
};
