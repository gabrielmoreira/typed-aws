// CloudFormation Resource AWS::SSMContacts::ContactChannel

import { CFResource } from '../../base';

export type ContactChannel_Type = 'AWS::SSMContacts::ContactChannel';
export const ContactChannel_Type = 'AWS::SSMContacts::ContactChannel';

export default function ContactChannel(props: ContactChannel_Properties) {
  return new CFResource<ContactChannel_Type, ContactChannel_Properties>(
    ContactChannel_Type,
    props
  );
}

export type ContactChannel_Properties = {
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-contactid}
   */
  ContactId: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channelname}
   */
  ChannelName: string;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeltype}
   */
  ChannelType: 'SMS' | 'VOICE' | 'EMAIL';
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-deferactivation}
   */
  DeferActivation?: boolean;
  /**
   * {@link
   * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeladdress}
   */
  ChannelAddress: string;
  Arn?: string;
};
