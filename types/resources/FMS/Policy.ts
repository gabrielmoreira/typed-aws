// CloudFormation Resource AWS::FMS::Policy

import { CfnResource } from '../../base';

export type Policy_Type = 'AWS::FMS::Policy';
export const Policy_Type = 'AWS::FMS::Policy';

/**
 * Creates an AWS Firewall Manager policy. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html}
 */
export default function Policy(props: Policy_Properties) {
  return new CfnResource<Policy_Properties>(Policy_Type, props);
}

/**
 * Creates an AWS Firewall Manager policy. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html}
 */
export type Policy_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-excludemap}
   */
  ExcludeMap?: IEMap;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-excluderesourcetags}
   */
  ExcludeResourceTags: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-includemap}
   */
  IncludeMap?: IEMap;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policyname}
   */
  PolicyName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-remediationenabled}
   */
  RemediationEnabled: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetags}
   */
  ResourceTags?: ResourceTag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetype}
   */
  ResourceType: ResourceType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetypelist}
   */
  ResourceTypeList?: ResourceType[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-securityservicepolicydata}
   */
  SecurityServicePolicyData: {
    ManagedServiceData?: string;
    Type:
      | 'WAF'
      | 'WAFV2'
      | 'SHIELD_ADVANCED'
      | 'SECURITY_GROUPS_COMMON'
      | 'SECURITY_GROUPS_CONTENT_AUDIT'
      | 'SECURITY_GROUPS_USAGE_AUDIT'
      | 'NETWORK_FIREWALL'
      | 'DNS_FIREWALL';
  };
  Arn?: ResourceArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-deleteallpolicyresources}
   */
  DeleteAllPolicyResources?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcescleanup}
   */
  ResourcesCleanUp?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-tags}
   */
  Tags?: PolicyTag[];
};

export type AccountId = string;

export type OrganizationalUnitId = string;

/**
 * An FMS includeMap or excludeMap. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html}
 */
export type IEMap = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html#cfn-fms-policy-iemap-account}
   */
  ACCOUNT?: AccountId[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-iemap.html#cfn-fms-policy-iemap-orgunit}
   */
  ORGUNIT?: OrganizationalUnitId[];
};

/**
 * A policy tag. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html}
 */
export type PolicyTag = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html#cfn-fms-policy-policytag-key}
   */
  Key: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-policytag.html#cfn-fms-policy-policytag-value}
   */
  Value: string;
};

/**
 * A resource tag. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html}
 */
export type ResourceTag = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html#cfn-fms-policy-resourcetag-key}
   */
  Key: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-resourcetag.html#cfn-fms-policy-resourcetag-value}
   */
  Value?: string;
};

export type ResourceType = string;

export type ResourceArn = string;
