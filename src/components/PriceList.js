import React from 'react';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
    return (
        <ul className="list-group list-group-flush">
            {items.map((item) => (
                <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span className="col-1 badge badge-primary">
                        {item.category.name}
                    </span>
                    <span className="col-5">{item.title}</span>
                    <span className="col-2 font-weight-bold">
                        {item.category.type === 'income' ? '+' : '-'}
                        {item.price}元
                    </span>
                    <span className="col-2">{item.date}</span>
                    <button
                        className="col-1 btn btn-primary"
                        onClick={() => onModifyItem(item)}
                    >
                        編輯
                    </button>
                    <button
                        className="col-1 btn btn-danger"
                        onClick={() => onDeleteItem(item)}
                    >
                        刪除
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default PriceList;
