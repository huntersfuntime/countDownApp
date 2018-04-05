import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class CdownForm extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);

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

    

    render() {
        return (
            <div>
                <h1> WINTER IS COMING </h1>
                <DatePicker 
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <a onClick={this.handleGenerate}>Generate Countdown</a>
            </div>
        )
    }
}

export default CdownForm;