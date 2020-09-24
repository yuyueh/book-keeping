import React from 'react';
import PriceList from './components/PriceList';

const data = [
    {
        id: 1,
        category: { name: '旅遊', type: 'outcome', iconName: 'ios-plane' },
        title: '去旅行',
        price: 200,
        date: '2020-09-10',
    },
    {
        id: 2,
        category: { name: '旅遊', type: 'outcome', iconName: 'ios-plane' },
        title: '潛水',
        price: 500,
        date: '2020-09-11',
    },
];

function App() {
    return <PriceList items={data}></PriceList>;
}

export default App;
