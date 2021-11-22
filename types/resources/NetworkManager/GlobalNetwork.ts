// CloudFormation Resource AWS::NetworkManager::GlobalNetwork

import { CfnResource, Resolvable } from '../../base';

export type GlobalNetwork_Type = 'AWS::NetworkManager::GlobalNetwork';
export const GlobalNetwork_Type = 'AWS::NetworkManager::GlobalNetwork';

/**
 * The AWS::NetworkManager::GlobalNetwork type specifies a global network
 * of the user's account {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html}
 */
export default function GlobalNetwork(props: GlobalNetwork_Properties) {
  return new CfnResource<GlobalNetwork_Properties>(GlobalNetwork_Type, props);
}

/**
 * The AWS::NetworkManager::GlobalNetwork type specifies a global network
 * of the user's account {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html}
 */
export type GlobalNetwork_Properties = {
  Arn?: Resolvable<string>;
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key?: Resolvable<string>;
  Value?: Resolvable<string>;
};
