import CapacityProvider_ from './CapacityProvider';
import Cluster_ from './Cluster';
import ClusterCapacityProviderAssociations_ from './ClusterCapacityProviderAssociations';
import PrimaryTaskSet_ from './PrimaryTaskSet';
import Service_ from './Service';
import TaskDefinition_ from './TaskDefinition';
import TaskSet_ from './TaskSet';

export namespace ECS {
  export const CapacityProvider = CapacityProvider_;
  export const Cluster = Cluster_;
  export const ClusterCapacityProviderAssociations =
    ClusterCapacityProviderAssociations_;
  export const PrimaryTaskSet = PrimaryTaskSet_;
  export const Service = Service_;
  export const TaskDefinition = TaskDefinition_;
  export const TaskSet = TaskSet_;
}

export default ECS;
