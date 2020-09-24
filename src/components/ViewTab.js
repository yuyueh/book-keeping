import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

export const LIST_VIEW = 'List';
export const CHART_VIEW = 'Chart';

const generateLinkClass = (current, view) => {
    return `nav-link ${current === view ? 'active' : ''}`;
};

const ViewTab = ({ activeTab, onTabChange }) => {
    return (
        <ul class="nav nav-tabs nav-fill">
            <li className="nav-item">
                <a
                    className={generateLinkClass(activeTab, LIST_VIEW)}
                    href="javascript:void(0)"
                    onClick={(e) => {
                        e.preventDefault();
                        onTabChange(LIST_VIEW);
                    }}
                >
                    <Ionicon
                        className="rounded-circle mr-2"
                        font-size="25px"
                        color="#007bff"
                        icon="ios-paper"
                    ></Ionicon>
                    列表模式
                </a>
            </li>
            <li className="nav-item">
                <a
                    className={generateLinkClass(activeTab, CHART_VIEW)}
                    href="javascript:void(0)"
                    onClick={(e) => {
                        e.preventDefault();
                        onTabChange(CHART_VIEW);
                    }}
                >
                    <Ionicon
                        className="rounded-circle mr-2"
                        font-size="25px"
                        color="#007bff"
                        icon="ios-pie"
                    ></Ionicon>
                    圖表模式
                </a>
            </li>
        </ul>
    );
};

ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export default ViewTab;
