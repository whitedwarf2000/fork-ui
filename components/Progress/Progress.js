import Circle from './Circle';
import Linear from './Linear';

const Progress = f => f;

Progress.Circle = Circle;
Progress.Linear = Linear;

Progress.displayName = 'Progress';
Progress.propTypes = {};
Progress.defaultProps = {};

export default Progress;
