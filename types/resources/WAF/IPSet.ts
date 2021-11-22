// CloudFormation Resource AWS::WAF::IPSet

import { CfnResource, Resolvable } from '../../base';

export type IPSet_Type = 'AWS::WAF::IPSet';
export const IPSet_Type = 'AWS::WAF::IPSet';

/**
 * Resource Type definition for AWS::WAF::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html}
 */
export default function IPSet(props: IPSet_Properties) {
  return new CfnResource<IPSet_Properties>(IPSet_Type, props);
}

/**
 * Resource Type definition for AWS::WAF::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html}
 */
export type IPSet_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html#cfn-waf-ipset-ipsetdescriptors}
   */
  IPSetDescriptors?: IPSetDescriptor[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html#cfn-waf-ipset-name}
   */
  Name: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptors.html}
 */
export type IPSetDescriptor = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptors.html#cfn-waf-ipset-ipsetdescriptors-type}
   */
  Type: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptors.html#cfn-waf-ipset-ipsetdescriptors-value}
   */
  Value: Resolvable<string>;
};
