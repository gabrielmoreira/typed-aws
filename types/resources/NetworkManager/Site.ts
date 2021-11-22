// CloudFormation Resource AWS::NetworkManager::Site

import { CfnResource, Resolvable } from '../../base';

export type Site_Type = 'AWS::NetworkManager::Site';
export const Site_Type = 'AWS::NetworkManager::Site';

/**
 * The AWS::NetworkManager::Site type describes a site. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html}
 */
export default function Site(props: Site_Properties) {
  return new CfnResource<Site_Properties>(Site_Type, props);
}

/**
 * The AWS::NetworkManager::Site type describes a site. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html}
 */
export type Site_Properties = {
  SiteArn?: Resolvable<string>;
  SiteId?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-globalnetworkid}
   */
  GlobalNetworkId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-location}
   */
  Location?: Location;
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};

/**
 * The location of the site {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html}
 */
export type Location = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html#cfn-networkmanager-site-location-address}
   */
  Address?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html#cfn-networkmanager-site-location-latitude}
   */
  Latitude?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html#cfn-networkmanager-site-location-longitude}
   */
  Longitude?: Resolvable<string>;
};
