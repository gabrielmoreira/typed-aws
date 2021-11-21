import AutoScalingGroup_ from './AutoScalingGroup';
import LaunchConfiguration_ from './LaunchConfiguration';
import LifecycleHook_ from './LifecycleHook';
import ScalingPolicy_ from './ScalingPolicy';
import ScheduledAction_ from './ScheduledAction';
import WarmPool_ from './WarmPool';

export namespace AutoScaling {
  export const AutoScalingGroup = AutoScalingGroup_;
  export const LaunchConfiguration = LaunchConfiguration_;
  export const LifecycleHook = LifecycleHook_;
  export const ScalingPolicy = ScalingPolicy_;
  export const ScheduledAction = ScheduledAction_;
  export const WarmPool = WarmPool_;
}

export default AutoScaling;
