// CloudFormation Resource AWS::IoT::MitigationAction

import { CfnResource } from '../../base';

export type MitigationAction_Type = 'AWS::IoT::MitigationAction';
export const MitigationAction_Type = 'AWS::IoT::MitigationAction';

/**
 * Mitigation actions can be used to take actions to mitigate issues that
 * were found in an Audit finding or Detect violation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html}
 */
export default function MitigationAction(props: MitigationAction_Properties) {
  return new CfnResource<MitigationAction_Properties>(
    MitigationAction_Type,
    props
  );
}

/**
 * Mitigation actions can be used to take actions to mitigate issues that
 * were found in an Audit finding or Detect violation. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html}
 */
export type MitigationAction_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionname}
   */
  ActionName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-rolearn}
   */
  RoleArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams}
   */
  ActionParams: ActionParams;
  MitigationActionArn?: string;
  MitigationActionId?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};

/**
 * The set of parameters for this mitigation action. You can specify only
 * one type of parameter (in other words, you can apply only one action
 * for each defined mitigation action). {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html}
 */
export type ActionParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-addthingstothinggroupparams}
   */
  AddThingsToThingGroupParams?: AddThingsToThingGroupParams;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-enableiotloggingparams}
   */
  EnableIoTLoggingParams?: EnableIoTLoggingParams;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-publishfindingtosnsparams}
   */
  PublishFindingToSnsParams?: PublishFindingToSnsParams;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-replacedefaultpolicyversionparams}
   */
  ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-updatecacertificateparams}
   */
  UpdateCACertificateParams?: UpdateCACertificateParams;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-actionparams.html#cfn-iot-mitigationaction-actionparams-updatedevicecertificateparams}
   */
  UpdateDeviceCertificateParams?: UpdateDeviceCertificateParams;
};

/**
 * Parameters to define a mitigation action that moves devices associated
 * with a certificate to one or more specified thing groups, typically
 * for quarantine. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html}
 */
export type AddThingsToThingGroupParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html#cfn-iot-mitigationaction-addthingstothinggroupparams-overridedynamicgroups}
   */
  OverrideDynamicGroups?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-addthingstothinggroupparams.html#cfn-iot-mitigationaction-addthingstothinggroupparams-thinggroupnames}
   */
  ThingGroupNames: string[];
};

/**
 * Parameters to define a mitigation action that enables AWS IoT logging
 * at a specified level of detail. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html}
 */
export type EnableIoTLoggingParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html#cfn-iot-mitigationaction-enableiotloggingparams-loglevel}
   */
  LogLevel: 'DEBUG' | 'INFO' | 'ERROR' | 'WARN';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-enableiotloggingparams.html#cfn-iot-mitigationaction-enableiotloggingparams-rolearnforlogging}
   */
  RoleArnForLogging: string;
};

/**
 * Parameters, to define a mitigation action that publishes findings to
 * Amazon SNS. You can implement your own custom actions in response to
 * the Amazon SNS messages. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html}
 */
export type PublishFindingToSnsParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-publishfindingtosnsparams.html#cfn-iot-mitigationaction-publishfindingtosnsparams-topicarn}
   */
  TopicArn: string;
};

/**
 * Parameters to define a mitigation action that adds a blank policy to
 * restrict permissions. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html}
 */
export type ReplaceDefaultPolicyVersionParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html#cfn-iot-mitigationaction-replacedefaultpolicyversionparams-templatename}
   */
  TemplateName: 'BLANK_POLICY';
};

/**
 * Parameters to define a mitigation action that changes the state of the
 * CA certificate to inactive. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html}
 */
export type UpdateCACertificateParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatecacertificateparams.html#cfn-iot-mitigationaction-updatecacertificateparams-action}
   */
  Action: 'DEACTIVATE';
};

/**
 * Parameters to define a mitigation action that changes the state of the
 * device certificate to inactive. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html}
 */
export type UpdateDeviceCertificateParams = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-mitigationaction-updatedevicecertificateparams.html#cfn-iot-mitigationaction-updatedevicecertificateparams-action}
   */
  Action: 'DEACTIVATE';
};
