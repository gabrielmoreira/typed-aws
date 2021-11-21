// CloudFormation Resource AWS::Events::EventBus

import { CfnResource } from '../../base';

export type EventBus_Type = 'AWS::Events::EventBus';
export const EventBus_Type = 'AWS::Events::EventBus';

/**
 * Resource Type definition for AWS::Events::EventBus {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html}
 */
export default function EventBus(props: EventBus_Properties) {
  return new CfnResource<EventBus_Properties>(EventBus_Type, props);
}

/**
 * Resource Type definition for AWS::Events::EventBus {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html}
 */
export type EventBus_Properties = {
  Id?: string;
  Policy?: string;
  Arn?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-name}
   */
  Name: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-eventsourcename}
   */
  EventSourceName?: string;
};
