// CloudFormation Resource AWS::AmazonMQ::ConfigurationAssociation

import { CfnResource } from '../../base';

export type ConfigurationAssociation_Type =
  'AWS::AmazonMQ::ConfigurationAssociation';
export const ConfigurationAssociation_Type =
  'AWS::AmazonMQ::ConfigurationAssociation';

/**
 * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html}
 */
export default function ConfigurationAssociation(
  props: ConfigurationAssociation_Properties
) {
  return new CfnResource<ConfigurationAssociation_Properties>(
    ConfigurationAssociation_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html}
 */
export type ConfigurationAssociation_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-broker}
   */
  Broker: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-configuration}
   */
  Configuration: ConfigurationId;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html}
 */
export type ConfigurationId = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html#cfn-amazonmq-configurationassociation-configurationid-revision}
   */
  Revision: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amazonmq-configurationassociation-configurationid.html#cfn-amazonmq-configurationassociation-configurationid-id}
   */
  Id: string;
};
