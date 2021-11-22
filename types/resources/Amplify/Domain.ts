// CloudFormation Resource AWS::Amplify::Domain

import { CfnResource, Resolvable } from '../../base';

export type Domain_Type = 'AWS::Amplify::Domain';
export const Domain_Type = 'AWS::Amplify::Domain';

/**
 * The AWS::Amplify::Domain resource allows you to connect a custom
 * domain to your app. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html}
 */
export default function Domain(props: Domain_Properties) {
  return new CfnResource<Domain_Properties>(Domain_Type, props);
}

/**
 * The AWS::Amplify::Domain resource allows you to connect a custom
 * domain to your app. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html}
 */
export type Domain_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-appid}
   */
  AppId: Resolvable<string>;
  Arn?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-autosubdomaincreationpatterns}
   */
  AutoSubDomainCreationPatterns?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-autosubdomainiamrole}
   */
  AutoSubDomainIAMRole?: Resolvable<string>;
  CertificateRecord?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-domainname}
   */
  DomainName: Resolvable<string>;
  DomainStatus?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-enableautosubdomain}
   */
  EnableAutoSubDomain?: Resolvable<boolean>;
  StatusReason?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-subdomainsettings}
   */
  SubDomainSettings: SubDomainSetting[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html}
 */
export type SubDomainSetting = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html#cfn-amplify-domain-subdomainsetting-prefix}
   */
  Prefix: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html#cfn-amplify-domain-subdomainsetting-branchname}
   */
  BranchName: Resolvable<string>;
};
