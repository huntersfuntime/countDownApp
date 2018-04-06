import React, { Component } from 'react';

    class Clock extends Component {

        constructor(props) {
            super(props)

            this.timer = 0;
            this.countdown = props.countdownFormState.startDate.toString();
            this.getTimeRemaining = this.getTimeRemaining.bind(this);

            this.state = {
                timeRemaining: this.getTimeRemaining(props.countdownFormState.startDate.toString())
            }
        }

        componentWillReceiveProps(nextProps) {
            console.log(`next props: ${JSON.stringify(nextProps)}`);
        }

       getTimeRemaining(countdown) {
            var cdown = new Date(countdown);
            let today = new Date();

            const currentMonth = today.getMonth();
            const downMonth = cdown.getMonth();

            if(downMonth > currentMonth) {
                
                cdown.setFullYear(today.getFullYear());
            } 
            else if (downMonth < currentMonth) { 

                cdown.setFullYear(today.getFullYear() + 1);
            }
            else if(downMonth == currentMonth) {
                const downDay = cdown.getDate();
                const currentDay = today.getDate();
                if(downDay > currentDay) {
                    cdown.setFullYear(today.getFullYear());
                }
                else if (downDay < currentDay) {

                    cdown.setFullYear(today.getFullYear() + 1);
                }
            }
            



            var distance = cdown.getTime() - today.getTime();

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
           
            return {
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
       }

       getAge = function() {
            var cdown = new Date(this.countdown);
            let today = new Date();

            var distance =  today.getTime() - cdown.getTime();
            var daysOld = Math.floor(distance / (1000 * 60 * 60 * 24));
            var yearsOld = Number((daysOld/365).toFixed(0)); 
            return yearsOld
       }.bind(this)

       componentDidMount () {
                 this.timer = setInterval(() => {
                     const timeRemaining = this.getTimeRemaining(this.countdown)
                     this.setState({ timeRemaining: timeRemaining })
                 }, 1000);
             }

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        render() {
            const data = this.state.timeRemaining
            return (
                <div>
                    <div>
                        <div>Days {data.days} </div>
                        <div>HRS {data.hours} </div>
                        <div>MINS {data.minutes} </div>
                        <div>SECS {data.seconds} </div>
                    </div>
                    <div>
                        {<h4>Remaining until you are {this.getAge()} </h4> }
                    </div>
                </div>
            )
        }

    }



export default Clock;