import Cluster_ from './Cluster';
import ClusterParameterGroup_ from './ClusterParameterGroup';
import ClusterSecurityGroup_ from './ClusterSecurityGroup';
import ClusterSecurityGroupIngress_ from './ClusterSecurityGroupIngress';
import ClusterSubnetGroup_ from './ClusterSubnetGroup';
import EndpointAccess_ from './EndpointAccess';
import EndpointAuthorization_ from './EndpointAuthorization';
import EventSubscription_ from './EventSubscription';
import ScheduledAction_ from './ScheduledAction';

export namespace Redshift {
  export const Cluster = Cluster_;
  export const ClusterParameterGroup = ClusterParameterGroup_;
  export const ClusterSecurityGroup = ClusterSecurityGroup_;
  export const ClusterSecurityGroupIngress = ClusterSecurityGroupIngress_;
  export const ClusterSubnetGroup = ClusterSubnetGroup_;
  export const EndpointAccess = EndpointAccess_;
  export const EndpointAuthorization = EndpointAuthorization_;
  export const EventSubscription = EventSubscription_;
  export const ScheduledAction = ScheduledAction_;
}

export default Redshift;
