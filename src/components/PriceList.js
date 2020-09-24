import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
    return (
        <ul className="list-group list-group-flush">
            {items.map((item) => (
                <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span className="col-1 badge badge-secondary">
                        <Ionicon
                            className="rounded-circle"
                            font-size="30px"
                            style={{
                                padding: '5px',
                            }}
                            color={'#fff'}
                            icon={item.category.iconName}
                        ></Ionicon>
                    </span>
                    <span className="col-5">{item.title}</span>
                    <span className="col-2 font-weight-bold">
                        {item.category.type === 'income' ? '+' : '-'}
                        {item.price}元
                    </span>
                    <span className="col-2">{item.date}</span>
                    <a className="col-1" onClick={() => onModifyItem(item)}>
                        <Ionicon
                            className="rounded-circle"
                            font-size="30px"
                            style={{
                                backgroundColor: '#28a745',
                                padding: '5px',
                            }}
                            color={'#fff'}
                            icon={'ios-create-outline'}
                        ></Ionicon>
                    </a>
                    <a className="col-1" onClick={() => onDeleteItem(item)}>
                        <Ionicon
                            className="rounded-circle"
                            font-size="30px"
                            style={{
                                backgroundColor: '#dc3545',
                                padding: '5px',
                            }}
                            color={'#fff'}
                            icon={'ios-close'}
                        ></Ionicon>
                    </a>
                </li>
            ))}
        </ul>
    );
};

PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
};

export default PriceList;
