// CloudFormation Resource AWS::DataSync::LocationObjectStorage

import { CfnResource } from '../../base';

export type LocationObjectStorage_Type = 'AWS::DataSync::LocationObjectStorage';
export const LocationObjectStorage_Type =
  'AWS::DataSync::LocationObjectStorage';

/**
 * Resource schema for AWS::DataSync::LocationObjectStorage. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html}
 */
export default function LocationObjectStorage(
  props: LocationObjectStorage_Properties
) {
  return new CfnResource<LocationObjectStorage_Properties>(
    LocationObjectStorage_Type,
    props
  );
}

/**
 * Resource schema for AWS::DataSync::LocationObjectStorage. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html}
 */
export type LocationObjectStorage_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-accesskey}
   */
  AccessKey?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-agentarns}
   */
  AgentArns: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-bucketname}
   */
  BucketName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-secretkey}
   */
  SecretKey?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-serverhostname}
   */
  ServerHostname: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-serverport}
   */
  ServerPort?: number;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-serverprotocol}
   */
  ServerProtocol?: 'HTTPS' | 'HTTP';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-subdirectory}
   */
  Subdirectory?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationobjectstorage.html#cfn-datasync-locationobjectstorage-tags}
   */
  Tags?: Tag[];
  LocationArn?: string;
  LocationUri?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
