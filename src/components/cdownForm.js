import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Clock from './Clock';

class CdownForm extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

        this.state = {
            startDate: moment(),
            formCompleted: false
        }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleGenerate() {
        this.setState({
            formCompleted: true
        });
    }

    handleChangeDate() {
        this.setState({
            formCompleted: false
        });
    }

    render() {
        return (
            <div className="countdown-container">
                {
                    this.state.formCompleted ? 
                    <div className="clock-container">
                        <Clock countdownFormState={this.state}/>
                        <a className="change-date" onClick={this.handleChangeDate}>Change date</a>
                    </div>
                :
                    <div className="date-picker-container"> 
                        <DatePicker className="date-picker"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                        />
                        <div className="submit-container">
                            <a onClick={this.handleGenerate}>Generate Countdown</a>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

export default CdownForm;