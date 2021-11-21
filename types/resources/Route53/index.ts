import DNSSEC_ from './DNSSEC';
import HealthCheck_ from './HealthCheck';
import HostedZone_ from './HostedZone';
import KeySigningKey_ from './KeySigningKey';
import RecordSet_ from './RecordSet';
import RecordSetGroup_ from './RecordSetGroup';

export namespace Route53 {
  export const DNSSEC = DNSSEC_;
  export const HealthCheck = HealthCheck_;
  export const HostedZone = HostedZone_;
  export const KeySigningKey = KeySigningKey_;
  export const RecordSet = RecordSet_;
  export const RecordSetGroup = RecordSetGroup_;
}

export default Route53;
