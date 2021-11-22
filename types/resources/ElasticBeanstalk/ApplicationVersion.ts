// CloudFormation Resource AWS::ElasticBeanstalk::ApplicationVersion

import { CfnResource, Resolvable } from '../../base';

export type ApplicationVersion_Type =
  'AWS::ElasticBeanstalk::ApplicationVersion';
export const ApplicationVersion_Type =
  'AWS::ElasticBeanstalk::ApplicationVersion';

/**
 * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html}
 */
export default function ApplicationVersion(
  props: ApplicationVersion_Properties
) {
  return new CfnResource<ApplicationVersion_Properties>(
    ApplicationVersion_Type,
    props
  );
}

/**
 * Resource Type definition for AWS::ElasticBeanstalk::ApplicationVersion
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html}
 */
export type ApplicationVersion_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html#cfn-elasticbeanstalk-applicationversion-applicationname}
   */
  ApplicationName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html#cfn-elasticbeanstalk-applicationversion-description}
   */
  Description?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-version.html#cfn-elasticbeanstalk-applicationversion-sourcebundle}
   */
  SourceBundle: SourceBundle;
};

/**
 * {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html}
 */
export type SourceBundle = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html#cfn-beanstalk-sourcebundle-s3bucket}
   */
  S3Bucket: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-sourcebundle.html#cfn-beanstalk-sourcebundle-s3key}
   */
  S3Key: Resolvable<string>;
};
