// CloudFormation Resource AWS::DataSync::LocationFSxWindows

import { CfnResource, Resolvable } from '../../base';

export type LocationFSxWindows_Type = 'AWS::DataSync::LocationFSxWindows';
export const LocationFSxWindows_Type = 'AWS::DataSync::LocationFSxWindows';

/**
 * Resource schema for AWS::DataSync::LocationFSxWindows. {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html}
 */
export default function LocationFSxWindows(
  props: LocationFSxWindows_Properties
) {
  return new CfnResource<LocationFSxWindows_Properties>(
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
  Domain?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-fsxfilesystemarn}
   */
  FsxFilesystemArn: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-password}
   */
  Password: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-securitygrouparns}
   */
  SecurityGroupArns: Resolvable<string>[];
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-subdirectory}
   */
  Subdirectory?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-user}
   */
  User: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxwindows.html#cfn-datasync-locationfsxwindows-tags}
   */
  Tags?: Tag[];
  LocationArn?: Resolvable<string>;
  LocationUri?: Resolvable<string>;
};

export type Tag = {
  Key: Resolvable<string>;
  Value: Resolvable<string>;
};
