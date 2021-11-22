// CloudFormation Resource AWS::DataSync::Agent

import { CfnResource, Resolvable } from '../../base';

export type Agent_Type = 'AWS::DataSync::Agent';
export const Agent_Type = 'AWS::DataSync::Agent';

/**
 * Resource schema for AWS::DataSync::Agent. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html}
 */
export default function Agent(props: Agent_Properties) {
  return new CfnResource<Agent_Properties>(Agent_Type, props);
}

/**
 * Resource schema for AWS::DataSync::Agent. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html}
 */
export type Agent_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-agentname}
   */
  AgentName?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-activationkey}
   */
  ActivationKey: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-securitygrouparns}
   */
  SecurityGroupArns?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-subnetarns}
   */
  SubnetArns?: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-vpcendpointid}
   */
  VpcEndpointId?: Resolvable<string>;
  EndpointType?: Resolvable<'FIPS' | 'PUBLIC' | 'PRIVATE_LINK'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-tags}
   */
  Tags?: Tag[];
  AgentArn?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
