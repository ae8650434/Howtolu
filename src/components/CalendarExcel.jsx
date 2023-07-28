import React, { Component } from 'react';
import '../css/calendar.css';
import Calendar from 'react-calendar';

class CalendarExcel extends Component {
    state = {}

    styleSize = {
        fontSize: 30
    };

    constructor(props) {
        super(props);

        const today = new Date();
        const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());
        const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.state = {
            cartList: [],
            value: new Date(),
            today: today,
            maxDate: maxDate,
            minDate: minDate,
            selectedDate: null,
            datepicker: false,
        };
    }

    calendar = () => {
        this.setState(prevState => ({
            datepicker: !prevState.datepicker,
        }));
    };

    isDisabled = date => {
        const day = date.getDay();
        return day !== 2 && day !== 5;
    };

    onClickDay = date => {
        this.setState({
            selectedDate: date,
            datepicker: false,
        });
    };

    formatDateString = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    renderDates = () => {
        const { selectedDate } = this.state;

        if (selectedDate) {
            const startDate = new Date(selectedDate);
            const endDate = new Date(selectedDate);
            endDate.setDate(endDate.getDate() + 2);
            const dates = [];

            while (startDate <= endDate) {
                dates.push(this.formatDateString(startDate));
                startDate.setDate(startDate.getDate() + 1);
            }
            return (
                <React.Fragment>
                    <label style={this.styleSize} htmlFor="">租借日：</label>
                    <input style={this.styleSize} type="text" value={dates[0]} onClick={this.toggleCalendar} />&nbsp;
                    <label style={this.styleSize} htmlFor="">歸還日：</label>
                    <input style={this.styleSize} type="text" value={dates[2]} onClick={this.toggleCalendar} />
                </React.Fragment>
            );
        }
        return null;
    };

    render() {
        const { value, maxDate, minDate, datepicker } = this.state;
        return (
            <div className="myform">
                <form id="myform" method="get" action="#">
                    <div style={{ display: datepicker ? 'block' : 'none' }}>
                        <Calendar
                            locale="en-US"
                            onClickDay={this.onClickDay}
                            value={value}
                            maxDate={maxDate}
                            minDate={minDate}
                            tileDisabled={({ date }) => this.isDisabled(date)}
                        />
                    </div>
                    <div>
                        <label style={this.styleSize} htmlFor="">選擇日期：</label>
                        <input style={this.styleSize}
                            type="text"
                            value={this.formatDateString(value)}
                            onClick={this.calendar}
                            readOnly
                        />
                    </div>
                    <div>{this.renderDates()}</div>
                </form>
            </div>
        );
    }
}

export default CalendarExcel;