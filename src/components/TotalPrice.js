import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({ income, outcome }) => {
    return (
        <div className="row">
            <div className="col">收入 : {income}</div>
            <div className="col">支出 : {outcome}</div>
        </div>
    );
};

TotalPrice.propTypes = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired,
};

export default TotalPrice;
