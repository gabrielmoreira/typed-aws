// CloudFormation Resource AWS::CloudFront::ResponseHeadersPolicy

import { CfnResource, Resolvable } from '../../base';

export type ResponseHeadersPolicy_Type =
  'AWS::CloudFront::ResponseHeadersPolicy';
export const ResponseHeadersPolicy_Type =
  'AWS::CloudFront::ResponseHeadersPolicy';

/**
 * Resource Type definition for AWS::CloudFront::ResponseHeadersPolicy
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export default function ResponseHeadersPolicy(
  props: ResponseHeadersPolicy_Properties
) {
  return new CfnResource<ResponseHeadersPolicy_Properties>(
    ResponseHeadersPolicy_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::CloudFront::ResponseHeadersPolicy
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html}
 */
export type ResponseHeadersPolicy_Properties = {
  Id?: Resolvable<string>;
  LastModifiedTime?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-responseheaderspolicy.html#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig}
   */
  ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.html}
 */
export type AccessControlAllowHeaders = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowheaders.html#cfn-cloudfront-responseheaderspolicy-accesscontrolallowheaders-items}
   */
  Items: Resolvable<string>[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.html}
 */
export type AccessControlAllowMethods = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolallowmethods.html#cfn-cloudfront-responseheaderspolicy-accesscontrolallowmethods-items}
   */
  Items: Resolvable<string>[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.html}
 */
export type AccessControlAllowOrigins = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolalloworigins.html#cfn-cloudfront-responseheaderspolicy-accesscontrolalloworigins-items}
   */
  Items: Resolvable<string>[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.html}
 */
export type AccessControlExposeHeaders = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-accesscontrolexposeheaders.html#cfn-cloudfront-responseheaderspolicy-accesscontrolexposeheaders-items}
   */
  Items: Resolvable<string>[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html}
 */
export type ContentSecurityPolicy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html#cfn-cloudfront-responseheaderspolicy-contentsecuritypolicy-contentsecuritypolicy}
   */
  ContentSecurityPolicy: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contentsecuritypolicy.html#cfn-cloudfront-responseheaderspolicy-contentsecuritypolicy-override}
   */
  Override: Resolvable<boolean>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.html}
 */
export type ContentTypeOptions = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-contenttypeoptions.html#cfn-cloudfront-responseheaderspolicy-contenttypeoptions-override}
   */
  Override: Resolvable<boolean>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html}
 */
export type CorsConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-accesscontrolallowcredentials}
   */
  AccessControlAllowCredentials: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-accesscontrolallowheaders}
   */
  AccessControlAllowHeaders: AccessControlAllowHeaders;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-accesscontrolallowmethods}
   */
  AccessControlAllowMethods: AccessControlAllowMethods;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-accesscontrolalloworigins}
   */
  AccessControlAllowOrigins: AccessControlAllowOrigins;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-accesscontrolexposeheaders}
   */
  AccessControlExposeHeaders?: AccessControlExposeHeaders;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-accesscontrolmaxagesec}
   */
  AccessControlMaxAgeSec?: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-corsconfig.html#cfn-cloudfront-responseheaderspolicy-corsconfig-originoverride}
   */
  OriginOverride: Resolvable<boolean>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html}
 */
export type CustomHeader = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html#cfn-cloudfront-responseheaderspolicy-customheader-header}
   */
  Header: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html#cfn-cloudfront-responseheaderspolicy-customheader-override}
   */
  Override: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheader.html#cfn-cloudfront-responseheaderspolicy-customheader-value}
   */
  Value: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.html}
 */
export type CustomHeadersConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-customheadersconfig.html#cfn-cloudfront-responseheaderspolicy-customheadersconfig-items}
   */
  Items: CustomHeader[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html}
 */
export type FrameOptions = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html#cfn-cloudfront-responseheaderspolicy-frameoptions-frameoption}
   */
  FrameOption: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-frameoptions.html#cfn-cloudfront-responseheaderspolicy-frameoptions-override}
   */
  Override: Resolvable<boolean>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html}
 */
export type ReferrerPolicy = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html#cfn-cloudfront-responseheaderspolicy-referrerpolicy-override}
   */
  Override: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-referrerpolicy.html#cfn-cloudfront-responseheaderspolicy-referrerpolicy-referrerpolicy}
   */
  ReferrerPolicy: Resolvable<string>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html}
 */
export type ResponseHeadersPolicyConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-comment}
   */
  Comment?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-corsconfig}
   */
  CorsConfig?: CorsConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-customheadersconfig}
   */
  CustomHeadersConfig?: CustomHeadersConfig;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-responseheaderspolicyconfig.html#cfn-cloudfront-responseheaderspolicy-responseheaderspolicyconfig-securityheadersconfig}
   */
  SecurityHeadersConfig?: SecurityHeadersConfig;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html}
 */
export type SecurityHeadersConfig = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html#cfn-cloudfront-responseheaderspolicy-securityheadersconfig-contentsecuritypolicy}
   */
  ContentSecurityPolicy?: ContentSecurityPolicy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html#cfn-cloudfront-responseheaderspolicy-securityheadersconfig-contenttypeoptions}
   */
  ContentTypeOptions?: ContentTypeOptions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html#cfn-cloudfront-responseheaderspolicy-securityheadersconfig-frameoptions}
   */
  FrameOptions?: FrameOptions;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html#cfn-cloudfront-responseheaderspolicy-securityheadersconfig-referrerpolicy}
   */
  ReferrerPolicy?: ReferrerPolicy;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html#cfn-cloudfront-responseheaderspolicy-securityheadersconfig-stricttransportsecurity}
   */
  StrictTransportSecurity?: StrictTransportSecurity;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-securityheadersconfig.html#cfn-cloudfront-responseheaderspolicy-securityheadersconfig-xssprotection}
   */
  XSSProtection?: XSSProtection;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html}
 */
export type StrictTransportSecurity = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html#cfn-cloudfront-responseheaderspolicy-stricttransportsecurity-accesscontrolmaxagesec}
   */
  AccessControlMaxAgeSec: Resolvable<number>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html#cfn-cloudfront-responseheaderspolicy-stricttransportsecurity-includesubdomains}
   */
  IncludeSubdomains?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html#cfn-cloudfront-responseheaderspolicy-stricttransportsecurity-override}
   */
  Override: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-stricttransportsecurity.html#cfn-cloudfront-responseheaderspolicy-stricttransportsecurity-preload}
   */
  Preload?: Resolvable<boolean>;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html}
 */
export type XSSProtection = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html#cfn-cloudfront-responseheaderspolicy-xssprotection-modeblock}
   */
  ModeBlock?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html#cfn-cloudfront-responseheaderspolicy-xssprotection-override}
   */
  Override: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html#cfn-cloudfront-responseheaderspolicy-xssprotection-protection}
   */
  Protection: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-responseheaderspolicy-xssprotection.html#cfn-cloudfront-responseheaderspolicy-xssprotection-reporturi}
   */
  ReportUri?: Resolvable<string>;
};
