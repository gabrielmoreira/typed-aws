// CloudFormation Resource AWS::DataSync::Agent

import { CFResource } from '../../base';

export type Agent_Type = 'AWS::DataSync::Agent';
export const Agent_Type = 'AWS::DataSync::Agent';

/**
 * Resource schema for AWS::DataSync::Agent. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html}
 */
export default function Agent(props: Agent_Properties) {
  return new CFResource<Agent_Type, Agent_Properties>(Agent_Type, props);
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
  AgentName?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-activationkey}
   */
  ActivationKey: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-securitygrouparns}
   */
  SecurityGroupArns?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-subnetarns}
   */
  SubnetArns?: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-vpcendpointid}
   */
  VpcEndpointId?: string;
  EndpointType?: 'FIPS' | 'PUBLIC' | 'PRIVATE_LINK';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-tags}
   */
  Tags?: Tag[];
  AgentArn?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
