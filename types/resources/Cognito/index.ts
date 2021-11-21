import IdentityPool_ from './IdentityPool';
import IdentityPoolRoleAttachment_ from './IdentityPoolRoleAttachment';
import UserPool_ from './UserPool';
import UserPoolClient_ from './UserPoolClient';
import UserPoolDomain_ from './UserPoolDomain';
import UserPoolGroup_ from './UserPoolGroup';
import UserPoolIdentityProvider_ from './UserPoolIdentityProvider';
import UserPoolResourceServer_ from './UserPoolResourceServer';
import UserPoolRiskConfigurationAttachment_ from './UserPoolRiskConfigurationAttachment';
import UserPoolUICustomizationAttachment_ from './UserPoolUICustomizationAttachment';
import UserPoolUser_ from './UserPoolUser';
import UserPoolUserToGroupAttachment_ from './UserPoolUserToGroupAttachment';

export namespace Cognito {
  export const IdentityPool = IdentityPool_;
  export const IdentityPoolRoleAttachment = IdentityPoolRoleAttachment_;
  export const UserPool = UserPool_;
  export const UserPoolClient = UserPoolClient_;
  export const UserPoolDomain = UserPoolDomain_;
  export const UserPoolGroup = UserPoolGroup_;
  export const UserPoolIdentityProvider = UserPoolIdentityProvider_;
  export const UserPoolResourceServer = UserPoolResourceServer_;
  export const UserPoolRiskConfigurationAttachment =
    UserPoolRiskConfigurationAttachment_;
  export const UserPoolUICustomizationAttachment =
    UserPoolUICustomizationAttachment_;
  export const UserPoolUser = UserPoolUser_;
  export const UserPoolUserToGroupAttachment = UserPoolUserToGroupAttachment_;
}

export default Cognito;
