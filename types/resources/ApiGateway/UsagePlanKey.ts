// CloudFormation Resource AWS::ApiGateway::UsagePlanKey

import { CFResource } from '../../base';

export type UsagePlanKey_Type = 'AWS::ApiGateway::UsagePlanKey';
export const UsagePlanKey_Type = 'AWS::ApiGateway::UsagePlanKey';

/**
 * Resource Type definition for AWS::ApiGateway::UsagePlanKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html}
 */
export default function UsagePlanKey(props: UsagePlanKey_Properties) {
  return new CFResource<UsagePlanKey_Type, UsagePlanKey_Properties>(
    UsagePlanKey_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ApiGateway::UsagePlanKey {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html}
 */
export type UsagePlanKey_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#cfn-apigateway-usageplankey-keyid}
   */
  KeyId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#cfn-apigateway-usageplankey-keytype}
   */
  KeyType: 'API_KEY';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#cfn-apigateway-usageplankey-usageplanid}
   */
  UsagePlanId: string;
  Id?: string;
};
