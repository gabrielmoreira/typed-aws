import DBCluster_ from './DBCluster';
import DBClusterParameterGroup_ from './DBClusterParameterGroup';
import DBInstance_ from './DBInstance';
import DBParameterGroup_ from './DBParameterGroup';
import DBProxy_ from './DBProxy';
import DBProxyEndpoint_ from './DBProxyEndpoint';
import DBProxyTargetGroup_ from './DBProxyTargetGroup';
import DBSecurityGroup_ from './DBSecurityGroup';
import DBSecurityGroupIngress_ from './DBSecurityGroupIngress';
import DBSubnetGroup_ from './DBSubnetGroup';
import EventSubscription_ from './EventSubscription';
import GlobalCluster_ from './GlobalCluster';
import OptionGroup_ from './OptionGroup';

export namespace RDS {
  export const DBCluster = DBCluster_;
  export const DBClusterParameterGroup = DBClusterParameterGroup_;
  export const DBInstance = DBInstance_;
  export const DBParameterGroup = DBParameterGroup_;
  export const DBProxy = DBProxy_;
  export const DBProxyEndpoint = DBProxyEndpoint_;
  export const DBProxyTargetGroup = DBProxyTargetGroup_;
  export const DBSecurityGroup = DBSecurityGroup_;
  export const DBSecurityGroupIngress = DBSecurityGroupIngress_;
  export const DBSubnetGroup = DBSubnetGroup_;
  export const EventSubscription = EventSubscription_;
  export const GlobalCluster = GlobalCluster_;
  export const OptionGroup = OptionGroup_;
}

export default RDS;
