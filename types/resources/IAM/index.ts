import AccessKey_ from './AccessKey';
import Group_ from './Group';
import InstanceProfile_ from './InstanceProfile';
import ManagedPolicy_ from './ManagedPolicy';
import OIDCProvider_ from './OIDCProvider';
import Role_ from './Role';
import Policy_ from './Policy';
import ServiceLinkedRole_ from './ServiceLinkedRole';
import ServerCertificate_ from './ServerCertificate';
import User_ from './User';
import UserToGroupAddition_ from './UserToGroupAddition';
import VirtualMFADevice_ from './VirtualMFADevice';
import SAMLProvider_ from './SAMLProvider';

export namespace IAM {
  export const AccessKey = AccessKey_;
  export const Group = Group_;
  export const InstanceProfile = InstanceProfile_;
  export const ManagedPolicy = ManagedPolicy_;
  export const OIDCProvider = OIDCProvider_;
  export const Role = Role_;
  export const Policy = Policy_;
  export const ServiceLinkedRole = ServiceLinkedRole_;
  export const ServerCertificate = ServerCertificate_;
  export const User = User_;
  export const UserToGroupAddition = UserToGroupAddition_;
  export const VirtualMFADevice = VirtualMFADevice_;
  export const SAMLProvider = SAMLProvider_;
}

export default IAM;
