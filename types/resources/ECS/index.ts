import CapacityProvider_ from './CapacityProvider';
import Cluster_ from './Cluster';
import ClusterCapacityProviderAssociations_ from './ClusterCapacityProviderAssociations';
import PrimaryTaskSet_ from './PrimaryTaskSet';
import TaskSet_ from './TaskSet';
import Service_ from './Service';
import TaskDefinition_ from './TaskDefinition';

export namespace ECS {
  export const CapacityProvider = CapacityProvider_;
  export const Cluster = Cluster_;
  export const ClusterCapacityProviderAssociations =
    ClusterCapacityProviderAssociations_;
  export const PrimaryTaskSet = PrimaryTaskSet_;
  export const TaskSet = TaskSet_;
  export const Service = Service_;
  export const TaskDefinition = TaskDefinition_;
}

export default ECS;
