// CloudFormation Resource AWS::EMR::SecurityConfiguration

import { CfnResource, Resolvable } from '../../base';

export type SecurityConfiguration_Type = 'AWS::EMR::SecurityConfiguration';
export const SecurityConfiguration_Type = 'AWS::EMR::SecurityConfiguration';

/**
 * Resource Type definition for AWS::EMR::SecurityConfiguration {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html}
 */
export default function SecurityConfiguration(
  props: SecurityConfiguration_Properties
) {
  return new CfnResource<SecurityConfiguration_Properties>(
    SecurityConfiguration_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::EMR::SecurityConfiguration {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html}
 */
export type SecurityConfiguration_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html#cfn-emr-securityconfiguration-name}
   */
  Name?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html#cfn-emr-securityconfiguration-securityconfiguration}
   */
  SecurityConfiguration: {
    [k: string]: unknown;
  };
};
