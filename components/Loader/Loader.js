import Dots from './Dots';
import Spinner from './Spinner';
import Liquid from './Liquid';
import Attract from './Attract';
import NiceSpinner from './NiceSpinner';

const Loader = f => f;

Loader.Dots = Dots;
Loader.Spinner = Spinner;
Loader.Liquid = Liquid;
Loader.Attract = Attract;
Loader.NiceSpinner = NiceSpinner;

Loader.displayName = 'Loader';
Loader.propTypes = {};
Loader.defaultProps = {};

export default Loader;
