import Dots from './Dots';
import Spinner from './Spinner';
import Liquid from './Liquid';

const Loader = f => f;

Loader.Dots = Dots;
Loader.Spinner = Spinner;
Loader.Liquid = Liquid;

Loader.displayName = 'Loader';
Loader.propTypes = {};
Loader.defaultProps = {};

export default Loader;
