// CloudFormation Resource AWS::GameLift::Alias

import { CFResource } from '../../base';

export type Alias_Type = 'AWS::GameLift::Alias';
export const Alias_Type = 'AWS::GameLift::Alias';

/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon
 * GameLift (GameLift) fleet destination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html}
 */
export default function Alias(props: Alias_Properties) {
  return new CFResource<Alias_Type, Alias_Properties>(Alias_Type, props);
}

/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon
 * GameLift (GameLift) fleet destination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html}
 */
export type Alias_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-description}
   */
  Description?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy}
   */
  RoutingStrategy: RoutingStrategy;
  AliasId?: string;
};

export type RoutingStrategy =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-message}
       */
      Message?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-fleetid}
       */
      FleetId: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-type}
       */
      Type?: 'SIMPLE' | 'TERMINAL';
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-message}
       */
      Message: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-fleetid}
       */
      FleetId?: string;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-type}
       */
      Type?: 'SIMPLE' | 'TERMINAL';
    };
