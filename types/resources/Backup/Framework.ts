// CloudFormation Resource AWS::Backup::Framework

import { CfnResource } from '../../base';

export type Framework_Type = 'AWS::Backup::Framework';
export const Framework_Type = 'AWS::Backup::Framework';

/**
 * Contains detailed information about a framework. Frameworks contain
 * controls, which evaluate and report on your backup events and
 * resources. Frameworks generate daily compliance results. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html}
 */
export default function Framework(props: Framework_Properties) {
  return new CfnResource<Framework_Properties>(Framework_Type, props);
}

/**
 * Contains detailed information about a framework. Frameworks contain
 * controls, which evaluate and report on your backup events and
 * resources. Frameworks generate daily compliance results. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html}
 */
export type Framework_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkname}
   */
  FrameworkName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkdescription}
   */
  FrameworkDescription?: string;
  FrameworkArn?: string;
  DeploymentStatus?: string;
  CreationTime?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkcontrols}
   */
  FrameworkControls: FrameworkControl[];
  FrameworkStatus?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworktags}
   */
  FrameworkTags?: Tag[];
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html}
 */
export type FrameworkControl = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html#cfn-backup-framework-frameworkcontrol-controlname}
   */
  ControlName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html#cfn-backup-framework-frameworkcontrol-controlinputparameters}
   */
  ControlInputParameters?: ControlInputParameter[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-frameworkcontrol.html#cfn-backup-framework-frameworkcontrol-controlscope}
   */
  ControlScope?: {
    ComplianceResourceIds?: string[];
    ComplianceResourceTypes?: string[];
    Tags?: Tag[];
  };
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html}
 */
export type ControlInputParameter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html#cfn-backup-framework-controlinputparameter-parametername}
   */
  ParameterName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-framework-controlinputparameter.html#cfn-backup-framework-controlinputparameter-parametervalue}
   */
  ParameterValue: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
