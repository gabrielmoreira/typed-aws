// CloudFormation Resource AWS::Glue::Workflow

import { CFResource } from '../../base';

export type Workflow_Type = 'AWS::Glue::Workflow';
export const Workflow_Type = 'AWS::Glue::Workflow';

/**
 * Resource Type definition for AWS::Glue::Workflow {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html}
 */
export default function Workflow(props: Workflow_Properties) {
  return new CFResource<Workflow_Type, Workflow_Properties>(
    Workflow_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::Glue::Workflow {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html}
 */
export type Workflow_Properties = {
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-defaultrunproperties}
   */
  DefaultRunProperties?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-tags}
   */
  Tags?: {
    [k: string]: unknown;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-workflow.html#cfn-glue-workflow-name}
   */
  Name?: string;
};
