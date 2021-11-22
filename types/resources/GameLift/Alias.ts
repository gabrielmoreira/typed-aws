// CloudFormation Resource AWS::GameLift::Alias

import { CfnResource, Resolvable } from '../../base';

export type Alias_Type = 'AWS::GameLift::Alias';
export const Alias_Type = 'AWS::GameLift::Alias';

/**
 * The AWS::GameLift::Alias resource creates an alias for an Amazon
 * GameLift (GameLift) fleet destination. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html}
 */
export default function Alias(props: Alias_Properties) {
  return new CfnResource<Alias_Properties>(Alias_Type, props);
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
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-name}
   */
  Name: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy}
   */
  RoutingStrategy: RoutingStrategy;
  AliasId?: Resolvable<string>;
};

export type RoutingStrategy =
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-message}
       */
      Message?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-fleetid}
       */
      FleetId: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-type}
       */
      Type?: Resolvable<'SIMPLE' | 'TERMINAL'>;
    }
  | {
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-message}
       */
      Message: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-fleetid}
       */
      FleetId?: Resolvable<string>;
      /**
       * {@link
       * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-gamelift-alias-routingstrategy.html#cfn-gamelift-alias-routingstrategy-type}
       */
      Type?: Resolvable<'SIMPLE' | 'TERMINAL'>;
    };
