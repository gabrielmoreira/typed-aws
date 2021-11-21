// CloudFormation Resource AWS::CodeDeploy::Application

import { CfnResource } from '../../base';

export type Application_Type = 'AWS::CodeDeploy::Application';
export const Application_Type = 'AWS::CodeDeploy::Application';

/**
 * Resource Type definition for AWS::CodeDeploy::Application {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html}
 */
export default function Application(props: Application_Properties) {
  return new CfnResource<Application_Properties>(Application_Type, props);
}

/**
 * Resource Type definition for AWS::CodeDeploy::Application {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html}
 */
export type Application_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html#cfn-codedeploy-application-applicationname}
   */
  ApplicationName?: string;
  Id?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html#cfn-codedeploy-application-tags}
   */
  Tags?: Tag[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html#cfn-codedeploy-application-computeplatform}
   */
  ComputePlatform?: string;
};

export type Tag = {
  Value: string;
  Key: string;
};
