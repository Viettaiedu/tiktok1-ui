import propTypes from 'prop-types';


import Header from '~/layouts/components/Header';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children : propTypes.node.isRequired,
}
export default HeaderOnly;
