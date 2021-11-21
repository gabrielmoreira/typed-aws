import HealthCheck_ from './HealthCheck';
import DNSSEC_ from './DNSSEC';
import HostedZone_ from './HostedZone';
import RecordSetGroup_ from './RecordSetGroup';
import RecordSet_ from './RecordSet';
import KeySigningKey_ from './KeySigningKey';

export namespace Route53 {
  export const HealthCheck = HealthCheck_;
  export const DNSSEC = DNSSEC_;
  export const HostedZone = HostedZone_;
  export const RecordSetGroup = RecordSetGroup_;
  export const RecordSet = RecordSet_;
  export const KeySigningKey = KeySigningKey_;
}

export default Route53;
