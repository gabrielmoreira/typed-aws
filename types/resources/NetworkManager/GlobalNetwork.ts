// CloudFormation Resource AWS::NetworkManager::GlobalNetwork

import { CfnResource } from '../../base';

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
  Arn?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key?: string;
  Value?: string;
};
