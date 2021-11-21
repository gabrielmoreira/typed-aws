import Alarm_ from './Alarm';
import CompositeAlarm_ from './CompositeAlarm';
import AnomalyDetector_ from './AnomalyDetector';
import Dashboard_ from './Dashboard';
import MetricStream_ from './MetricStream';
import InsightRule_ from './InsightRule';

export namespace CloudWatch {
  export const Alarm = Alarm_;
  export const CompositeAlarm = CompositeAlarm_;
  export const AnomalyDetector = AnomalyDetector_;
  export const Dashboard = Dashboard_;
  export const MetricStream = MetricStream_;
  export const InsightRule = InsightRule_;
}

export default CloudWatch;
