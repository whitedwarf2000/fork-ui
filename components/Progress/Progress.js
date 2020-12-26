import Circle from './Circle';
import Linear from './Linear';

const Progress = f => f;

Progress.Circle = Circle;
Circle.Linear = Linear;

Progress.displayName = 'Progress';
Progress.propTypes = {};
Progress.defaultProps = {};

export default Progress;
