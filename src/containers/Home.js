import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PriceList from '../components/PriceList';
import TotalPrice from '../components/TotalPrice';
import ViewTab, { LIST_VIEW, CHART_VIEW } from '../components/ViewTab';
import MonthPicker from '../components/MonthPicker';

const data = [
    {
        id: 1,
        title: '去玩拉',
        category: {
            type: 'income',
            iconName: 'ios-train-outline',
            name: '旅遊',
        },
        price: 200,
    },
];

const HeaderWrapper = styled.header`
    background: lightgray;
`;

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <HeaderWrapper className="mb-2">
                    <div className="row mb-5"></div>
                    <div className="row align-items-end p-2">
                        <div className="col">
                            請選擇日期
                            <MonthPicker
                                year={2018}
                                month={2}
                                onChange={console.log}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice income={200} outcome={22} />
                        </div>
                    </div>
                </HeaderWrapper>
                <ViewTab
                    activeTab={LIST_VIEW}
                    onTabChange={console.log}
                ></ViewTab>
                <PriceList
                    items={data}
                    onModifyItem={console.log}
                    onDeleteItem={console.log}
                />
            </Fragment>
        );
    }
}

export default Home;
