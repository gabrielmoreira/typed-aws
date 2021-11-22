// CloudFormation Resource AWS::SSMContacts::ContactChannel

import { CfnResource, Resolvable } from '../../base';

export type ContactChannel_Type = 'AWS::SSMContacts::ContactChannel';
export const ContactChannel_Type = 'AWS::SSMContacts::ContactChannel';

export default function ContactChannel(props: ContactChannel_Properties) {
  return new CfnResource<ContactChannel_Properties>(ContactChannel_Type, props);
}

export type ContactChannel_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-contactid}
   */
  ContactId: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channelname}
   */
  ChannelName: Resolvable<string>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeltype}
   */
  ChannelType: Resolvable<'SMS' | 'VOICE' | 'EMAIL'>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-deferactivation}
   */
  DeferActivation?: Resolvable<boolean>;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeladdress}
   */
  ChannelAddress: Resolvable<string>;
  Arn?: Resolvable<string>;
};
