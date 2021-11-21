// CloudFormation Resource AWS::WAFRegional::WebACLAssociation

import { CFResource } from '../../base';

export type WebACLAssociation_Type = 'AWS::WAFRegional::WebACLAssociation';
export const WebACLAssociation_Type = 'AWS::WAFRegional::WebACLAssociation';

/**
 * Resource Type definition for AWS::WAFRegional::WebACLAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html}
 */
export default function WebACLAssociation(props: WebACLAssociation_Properties) {
  return new CFResource<WebACLAssociation_Type, WebACLAssociation_Properties>(
    WebACLAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::WAFRegional::WebACLAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html}
 */
export type WebACLAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html#cfn-wafregional-webaclassociation-resourcearn}
   */
  ResourceArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webaclassociation.html#cfn-wafregional-webaclassociation-webaclid}
   */
  WebACLId: string;
};
