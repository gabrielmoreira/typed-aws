import JobDefinition_ from './JobDefinition';
import ComputeEnvironment_ from './ComputeEnvironment';
import SchedulingPolicy_ from './SchedulingPolicy';
import JobQueue_ from './JobQueue';

export namespace Batch {
  export const JobDefinition = JobDefinition_;
  export const ComputeEnvironment = ComputeEnvironment_;
  export const SchedulingPolicy = SchedulingPolicy_;
  export const JobQueue = JobQueue_;
}

export default Batch;
