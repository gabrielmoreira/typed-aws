// CloudFormation Resource AWS::EKS::Cluster

import { CfnResource, Resolvable } from '../../base';

export type Cluster_Type = 'AWS::EKS::Cluster';
export const Cluster_Type = 'AWS::EKS::Cluster';

/**
 * An object representing an Amazon EKS cluster. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html}
 */
export default function Cluster(props: Cluster_Properties) {
  return new CfnResource<Cluster_Properties>(Cluster_Type, props);
}

/**
 * An object representing an Amazon EKS cluster. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html}
 */
export type Cluster_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-encryptionconfig}
   */
  EncryptionConfig?: EncryptionConfig[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-kubernetesnetworkconfig}
   */
  KubernetesNetworkConfig?: KubernetesNetworkConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-logging}
   */
  Logging?: Logging;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig}
   */
  ResourcesVpcConfig: ResourcesVpcConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-rolearn}
   */
  RoleArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-version}
   */
  Version?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-tags}
   */
  Tags?: Tag[];
  Arn?: Resolvable<string>;
  Endpoint?: Resolvable<string>;
  CertificateAuthorityData?: Resolvable<string>;
  ClusterSecurityGroupId?: Resolvable<string>;
  EncryptionConfigKeyArn?: Resolvable<string>;
  OpenIdConnectIssuerUrl?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};

/**
 * The encryption configuration for the cluster {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html}
 */
export type EncryptionConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html#cfn-eks-cluster-encryptionconfig-provider}
   */
  Provider?: {
    KeyArn?: Resolvable<string>;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html#cfn-eks-cluster-encryptionconfig-resources}
   */
  Resources?: Resolvable<string>[];
};

/**
 * An object representing the VPC configuration to use for an Amazon EKS
 * cluster. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html}
 */
export type ResourcesVpcConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-endpointprivateaccess}
   */
  EndpointPrivateAccess?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-endpointpublicaccess}
   */
  EndpointPublicAccess?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-publicaccesscidrs}
   */
  PublicAccessCidrs?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-securitygroupids}
   */
  SecurityGroupIds?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-subnetids}
   */
  SubnetIds: Resolvable<string>[];
};

/**
 * Enabled Logging Type {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html}
 */
export type LoggingTypeConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html#cfn-eks-cluster-loggingtypeconfig-type}
   */
  Type?: Resolvable<
    'api' | 'audit' | 'authenticator' | 'controllerManager' | 'scheduler'
  >;
};

export type EnabledTypes = LoggingTypeConfig[];

/**
 * The cluster control plane logging configuration for your cluster.
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html}
 */
export type ClusterLogging = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html#cfn-eks-cluster-clusterlogging-enabledtypes}
   */
  EnabledTypes?: EnabledTypes;
};

/**
 * Enable exporting the Kubernetes control plane logs for your cluster to
 * CloudWatch Logs based on log types. By default, cluster control plane
 * logs aren't exported to CloudWatch Logs. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html}
 */
export type Logging = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html#cfn-eks-cluster-logging-clusterlogging}
   */
  ClusterLogging?: ClusterLogging;
};

/**
 * The Kubernetes network configuration for the cluster. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html}
 */
export type KubernetesNetworkConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html#cfn-eks-cluster-kubernetesnetworkconfig-serviceipv4cidr}
   */
  ServiceIpv4Cidr?: Resolvable<string>;
};
