// CloudFormation Resource AWS::WAFv2::WebACLAssociation

import { CfnResource, Resolvable } from '../../base';

export type WebACLAssociation_Type = 'AWS::WAFv2::WebACLAssociation';
export const WebACLAssociation_Type = 'AWS::WAFv2::WebACLAssociation';

/**
 * Associates WebACL to Application Load Balancer, CloudFront or API
 * Gateway. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html}
 */
export default function WebACLAssociation(props: WebACLAssociation_Properties) {
  return new CfnResource<WebACLAssociation_Properties>(
    WebACLAssociation_Type,
    props
  );
}

/**
 * Associates WebACL to Application Load Balancer, CloudFront or API
 * Gateway. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html}
 */
export type WebACLAssociation_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html#cfn-wafv2-webaclassociation-resourcearn}
   */
  ResourceArn: ResourceArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html#cfn-wafv2-webaclassociation-webaclarn}
   */
  WebACLArn: ResourceArn;
};

export type ResourceArn = Resolvable<string>;
