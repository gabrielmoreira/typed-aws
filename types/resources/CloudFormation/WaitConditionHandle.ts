// CloudFormation Resource AWS::CloudFormation::WaitConditionHandle

import { CFResource } from '../../base';

export type WaitConditionHandle_Type =
  'AWS::CloudFormation::WaitConditionHandle';
export const WaitConditionHandle_Type =
  'AWS::CloudFormation::WaitConditionHandle';

/**
 * Resource Type definition for AWS::CloudFormation::WaitConditionHandle
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitconditionhandle.html}
 */
export default function WaitConditionHandle(
  props: WaitConditionHandle_Properties
) {
  return new CFResource<
    WaitConditionHandle_Type,
    WaitConditionHandle_Properties
  >(WaitConditionHandle_Type, props);
}

/**
 * Resource Type definition for AWS::CloudFormation::WaitConditionHandle
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waitconditionhandle.html}
 */
export type WaitConditionHandle_Properties = {
  Id?: string;
};
