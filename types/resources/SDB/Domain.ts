// CloudFormation Resource AWS::SDB::Domain

import { CfnResource, Resolvable } from '../../base';

export type Domain_Type = 'AWS::SDB::Domain';
export const Domain_Type = 'AWS::SDB::Domain';

/**
 * Resource Type definition for AWS::SDB::Domain {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html}
 */
export default function Domain(props: Domain_Properties) {
  return new CfnResource<Domain_Properties>(Domain_Type, props);
}

/**
 * Resource Type definition for AWS::SDB::Domain {@link
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html}
 */
export type Domain_Properties = {
  Id?: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-simpledb.html#cfn-sdb-domain-description}
   */
  Description?: Resolvable<string>;
};
