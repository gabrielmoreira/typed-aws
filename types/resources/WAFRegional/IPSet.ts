// CloudFormation Resource AWS::WAFRegional::IPSet

import { CfnResource } from '../../base';

export type IPSet_Type = 'AWS::WAFRegional::IPSet';
export const IPSet_Type = 'AWS::WAFRegional::IPSet';

/**
 * Resource Type definition for AWS::WAFRegional::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html}
 */
export default function IPSet(props: IPSet_Properties) {
  return new CfnResource<IPSet_Properties>(IPSet_Type, props);
}

/**
 * Resource Type definition for AWS::WAFRegional::IPSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html}
 */
export type IPSet_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#cfn-wafregional-ipset-ipsetdescriptors}
   */
  IPSetDescriptors?: IPSetDescriptor[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#cfn-wafregional-ipset-name}
   */
  Name: string;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ipset-ipsetdescriptor.html}
 */
export type IPSetDescriptor = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ipset-ipsetdescriptor.html#cfn-wafregional-ipset-ipsetdescriptor-type}
   */
  Type: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ipset-ipsetdescriptor.html#cfn-wafregional-ipset-ipsetdescriptor-value}
   */
  Value: string;
};
