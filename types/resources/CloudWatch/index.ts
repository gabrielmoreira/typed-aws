import Alarm_ from './Alarm';
import AnomalyDetector_ from './AnomalyDetector';
import CompositeAlarm_ from './CompositeAlarm';
import Dashboard_ from './Dashboard';
import InsightRule_ from './InsightRule';
import MetricStream_ from './MetricStream';

export namespace CloudWatch {
  export const Alarm = Alarm_;
  export const AnomalyDetector = AnomalyDetector_;
  export const CompositeAlarm = CompositeAlarm_;
  export const Dashboard = Dashboard_;
  export const InsightRule = InsightRule_;
  export const MetricStream = MetricStream_;
}

export default CloudWatch;
