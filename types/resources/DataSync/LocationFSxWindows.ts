// CloudFormation Resource AWS::DataSync::LocationFSxWindows

import { CFResource } from '../../base';

export type LocationFSxWindows_Type = 'AWS::DataSync::LocationFSxWindows';
export const LocationFSxWindows_Type = 'AWS::DataSync::LocationFSxWindows';

/**
 * Resource schema for AWS::DataSync::LocationFSxWindows. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html}
 */
export default function LocationFSxWindows(
  props: LocationFSxWindows_Properties
) {
  return new CFResource<LocationFSxWindows_Type, LocationFSxWindows_Properties>(
    LocationFSxWindows_Type,
    props
  );
}

/**
 * Resource schema for AWS::DataSync::LocationFSxWindows. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html}
 */
export type LocationFSxWindows_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-domain}
   */
  Domain?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-fsxfilesystemarn}
   */
  FsxFilesystemArn: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-password}
   */
  Password: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-securitygrouparns}
   */
  SecurityGroupArns: string[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-subdirectory}
   */
  Subdirectory?: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-user}
   */
  User: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-tags}
   */
  Tags?: Tag[];
  LocationArn?: string;
  LocationUri?: string;
};

export type Tag = {
  Key: string;
  Value: string;
};
