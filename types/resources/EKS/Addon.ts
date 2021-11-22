// CloudFormation Resource AWS::EKS::Addon

import { CfnResource, Resolvable } from '../../base';

export type Addon_Type = 'AWS::EKS::Addon';
export const Addon_Type = 'AWS::EKS::Addon';

/**
 * Resource Schema for AWS::EKS::Addon {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html}
 */
export default function Addon(props: Addon_Properties) {
  return new CfnResource<Addon_Properties>(Addon_Type, props);
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
  ClusterName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-addonname}
   */
  AddonName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-addonversion}
   */
  AddonVersion?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-resolveconflicts}
   */
  ResolveConflicts?: Resolvable<'NONE' | 'OVERWRITE'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-serviceaccountrolearn}
   */
  ServiceAccountRoleArn?: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-tags}
   */
  Tags?: Tag[];
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
