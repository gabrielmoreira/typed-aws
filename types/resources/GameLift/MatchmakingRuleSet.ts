// CloudFormation Resource AWS::GameLift::MatchmakingRuleSet

import { CfnResource } from '../../base';

export type MatchmakingRuleSet_Type = 'AWS::GameLift::MatchmakingRuleSet';
export const MatchmakingRuleSet_Type = 'AWS::GameLift::MatchmakingRuleSet';

/**
 * Resource Type definition for AWS::GameLift::MatchmakingRuleSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html}
 */
export default function MatchmakingRuleSet(
  props: MatchmakingRuleSet_Properties
) {
  return new CfnResource<MatchmakingRuleSet_Properties>(
    MatchmakingRuleSet_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::GameLift::MatchmakingRuleSet {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html}
 */
export type MatchmakingRuleSet_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html#cfn-gamelift-matchmakingruleset-rulesetbody}
   */
  RuleSetBody: string;
  Id?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-matchmakingruleset.html#cfn-gamelift-matchmakingruleset-name}
   */
  Name: string;
};
