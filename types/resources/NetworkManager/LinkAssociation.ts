// CloudFormation Resource AWS::NetworkManager::LinkAssociation

import { CfnResource, Resolvable } from '../../base';

export type LinkAssociation_Type = 'AWS::NetworkManager::LinkAssociation';
export const LinkAssociation_Type = 'AWS::NetworkManager::LinkAssociation';

/**
 * The AWS::NetworkManager::LinkAssociation type associates a link to a
 * device. The device and link must be in the same global network and the
 * same site. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html}
 */
export default function LinkAssociation(props: LinkAssociation_Properties) {
  return new CfnResource<LinkAssociation_Properties>(
    LinkAssociation_Type,
    props
  );
}

/**
 * The AWS::NetworkManager::LinkAssociation type associates a link to a
 * device. The device and link must be in the same global network and the
 * same site. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html}
 */
export type LinkAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-globalnetworkid}
   */
  GlobalNetworkId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-deviceid}
   */
  DeviceId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-linkid}
   */
  LinkId: Resolvable<string>;
};
