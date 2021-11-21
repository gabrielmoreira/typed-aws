// CloudFormation Resource AWS::FIS::ExperimentTemplate

import { CFResource } from '../../base';

export type ExperimentTemplate_Type = 'AWS::FIS::ExperimentTemplate';
export const ExperimentTemplate_Type = 'AWS::FIS::ExperimentTemplate';

/**
 * Resource schema for AWS::FIS::ExperimentTemplate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html}
 */
export default function ExperimentTemplate(
  props: ExperimentTemplate_Properties
) {
  return new CFResource<ExperimentTemplate_Type, ExperimentTemplate_Properties>(
    ExperimentTemplate_Type,
    props
  );
}

/**
 * Resource schema for AWS::FIS::ExperimentTemplate {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html}
 */
export type ExperimentTemplate_Properties = {
  Id?: ExperimentTemplateId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-description}
   */
  Description: ExperimentTemplateDescription;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-targets}
   */
  Targets: ExperimentTemplateTargetMap;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-actions}
   */
  Actions?: ExperimentTemplateActionMap;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-stopconditions}
   */
  StopConditions: ExperimentTemplateStopConditionList;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-rolearn}
   */
  RoleArn: RoleArn;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-tags}
   */
  Tags: {
    [k: string]: string;
  };
};

export type ExperimentTemplateId = string;

export type ExperimentTemplateDescription = string;

export type StopConditionSource = string;

export type StopConditionValue = string;

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html}
 */
export type ExperimentTemplateStopCondition = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html#cfn-fis-experimenttemplate-experimenttemplatestopcondition-source}
   */
  Source: StopConditionSource;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html#cfn-fis-experimenttemplate-experimenttemplatestopcondition-value}
   */
  Value?: StopConditionValue;
};

export type ExperimentTemplateStopConditionList =
  ExperimentTemplateStopCondition[];

export type ResourceType = string;

export type ResourceArn = string;

export type ResourceArnList = ResourceArn[];

export type ExperimentTemplateTargetSelectionMode = string;

export type ExperimentTemplateTargetFilterPath = string;

export type ExperimentTemplateTargetFilterValue = string;

export type ExperimentTemplateTargetFilterValues =
  ExperimentTemplateTargetFilterValue[];

/**
 * Describes a filter used for the target resource input in an experiment
 * template. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html}
 */
export type ExperimentTemplateTargetFilter = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html#cfn-fis-experimenttemplate-experimenttemplatetargetfilter-path}
   */
  Path: ExperimentTemplateTargetFilterPath;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html#cfn-fis-experimenttemplate-experimenttemplatetargetfilter-values}
   */
  Values: ExperimentTemplateTargetFilterValues;
};

export type ExperimentTemplateTargetFilterList =
  ExperimentTemplateTargetFilter[];

/**
 * Specifies a target for an experiment. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html}
 */
export type ExperimentTemplateTarget = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcetype}
   */
  ResourceType: ResourceType;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcearns}
   */
  ResourceArns?: ResourceArnList;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcetags}
   */
  ResourceTags?: {
    [k: string]: string;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-filters}
   */
  Filters?: ExperimentTemplateTargetFilterList;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplatetarget.html#cfn-fis-experimenttemplate-experimenttemplatetarget-selectionmode}
   */
  SelectionMode: ExperimentTemplateTargetSelectionMode;
};

export type ExperimentTemplateTargetMap = {
  [k: string]: ExperimentTemplateTarget;
};

export type ActionId = string;

export type ExperimentTemplateActionItemDescription = string;

export type ExperimentTemplateActionItemParameter = string;

export type ExperimentTemplateActionItemTarget = string;

export type ExperimentTemplateActionItemStartAfter = string;

export type ExperimentTemplateActionItemStartAfterList =
  ExperimentTemplateActionItemStartAfter[];

/**
 * Specifies an action for the experiment template. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html}
 */
export type ExperimentTemplateAction = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-actionid}
   */
  ActionId: ActionId;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-description}
   */
  Description?: ExperimentTemplateActionItemDescription;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-parameters}
   */
  Parameters?: {
    [k: string]: ExperimentTemplateActionItemParameter;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-targets}
   */
  Targets?: {
    [k: string]: ExperimentTemplateActionItemTarget;
  };
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fis-experimenttemplate-experimenttemplateaction.html#cfn-fis-experimenttemplate-experimenttemplateaction-startafter}
   */
  StartAfter?: ExperimentTemplateActionItemStartAfterList;
};

export type ExperimentTemplateActionMap = {
  [k: string]: ExperimentTemplateAction;
};

export type RoleArn = string;
