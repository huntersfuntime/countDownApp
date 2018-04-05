import React, { Component } from 'react';

    class Clock extends Component {

        constructor(props) {
            super(props)

            this.state = {
                timeRemaining: {}
            }
        }

       

        render() {
            const data = this.state.timeRemaining

            return (
                <div>
                    <div>Days {data.days} </div>
                    <div>HRS {data.hours} </div>
                    <div>MINS {data.minutes} </div>
                    <div>SECS {data.seconds} </div>
                </div>
            )
        }
         componentDidMount() {
             this.countdown = this.props.countdownFormState.startDate.toString();
             alert(this.countdown);
         }

    }



export default Clock;