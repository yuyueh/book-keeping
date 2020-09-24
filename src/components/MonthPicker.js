import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { padLeft, generateRange } from '../utils/utils';

const generateDropdownItemClass = (date, current) => {
    return `dropdown-item ${date !== current || 'active'}`;
};

class MonthPicker extends PureComponent {
    constructor(props) {
        super(props);
        this.dropdownRef = React.createRef();
        this.state = {
            isOpen: false,
            selectedYear: this.props.year,
            selectedMonth: this.props.month,
        };
    }

    handleClick = (e) => {
        if (e.target.contains(this.dropdownRef.current)) {
            this.setState(() => ({
                isOpen: false,
            }));
        }
    };

    componentDidMount = () => {
        document.addEventListener('click', this.handleClick);
    };

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClick);
    };

    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState(() => ({
            isOpen: !this.state.isOpen,
        }));
    };

    handleYearChange = (e, year) => {
        e.preventDefault();
        this.setState(() => ({
            selectedYear: year,
        }));
        this.props.onChange(year, this.state.selectedMonth);
    };

    handleMonthChange = (e, item) => {
        e.preventDefault();
        this.setState(() => ({
            isOpen: false,
        }));
        this.props.onChange(this.state.selectedYear, item);
    };

    render() {
        const { isOpen, selectedYear, selectedMonth } = this.state;
        const yearRange = generateRange(9, selectedYear - 4);
        const monthRange = generateRange(12, 1);
        return (
            <div class="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    onClick={(e) => this.handleButtonClick(e)}
                >
                    {selectedYear} 年 {padLeft(2, selectedMonth)} 月
                </button>
                <div
                    ref={this.dropdownRef}
                    className="dropdown-menu"
                    style={{ display: isOpen ? 'block' : 'none' }}
                >
                    <div className="row">
                        <div className="col border-right">
                            {yearRange.map((item, i) => (
                                <a
                                    key={i}
                                    className={generateDropdownItemClass(
                                        item,
                                        selectedYear
                                    )}
                                    href="javascript:void(0)"
                                    onClick={(e) => {
                                        this.handleYearChange(e, item);
                                    }}
                                >
                                    {item} 年
                                </a>
                            ))}
                        </div>
                        <div className="col">
                            {monthRange.map((item, i) => (
                                <a
                                    key={i}
                                    className={generateDropdownItemClass(
                                        item,
                                        selectedMonth
                                    )}
                                    href="javascript:void(0)"
                                    onClick={(e) => {
                                        this.handleMonthChange(e, item);
                                    }}
                                >
                                    {padLeft(2, item)} 月
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
};

export default MonthPicker;
