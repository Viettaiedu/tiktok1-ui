import './GlobalStyles.scss';
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}
PropTypes.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
