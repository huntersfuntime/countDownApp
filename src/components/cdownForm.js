import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

class CdownForm extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1> WINTER IS COMING </h1>
                <DatePicker />
            </div>
        )
    }
}

export default CdownForm;