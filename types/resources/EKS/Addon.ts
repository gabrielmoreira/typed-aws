// CloudFormation Resource AWS::EKS::Addon

import { CFResource } from '../../base';

export type Addon_Type = 'AWS::EKS::Addon';
export const Addon_Type = 'AWS::EKS::Addon';

/**
 * Resource Schema for AWS::EKS::Addon {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html}
 */
export default function Addon(props: Addon_Properties) {
  return new CFResource<Addon_Type, Addon_Properties>(Addon_Type, props);
}

/**
 * Resource Schema for AWS::EKS::Addon {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html}
 */
export type Addon_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-clustername}
   */
  ClusterName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-addonname}
   */
  AddonName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-addonversion}
   */
  AddonVersion?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-resolveconflicts}
   */
  ResolveConflicts?: 'NONE' | 'OVERWRITE';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-serviceaccountrolearn}
   */
  ServiceAccountRoleArn?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: string;
  Value: string;
};
