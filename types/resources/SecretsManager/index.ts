import ResourcePolicy_ from './ResourcePolicy';
import RotationSchedule_ from './RotationSchedule';
import Secret_ from './Secret';
import SecretTargetAttachment_ from './SecretTargetAttachment';

export namespace SecretsManager {
  export const ResourcePolicy = ResourcePolicy_;
  export const RotationSchedule = RotationSchedule_;
  export const Secret = Secret_;
  export const SecretTargetAttachment = SecretTargetAttachment_;
}

export default SecretsManager;
