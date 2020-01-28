import React from 'react';
import './Metric_Clock.css';

function Metric_Output(props) {
    return (
        <div>
            <h2>Metric Time {props.metricHours}:{props.metricMinuets}:{props.metricSeconds}</h2>
        </div>
    );
}

class Metric_Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        this.metricTime = ((this.state.date.getHours()*3600) + (this.state.date.getMinutes()*60) + (this.state.date.getSeconds()))*100000/86400;
        this.metricHours = Math.floor(this.metricTime/10000);
        this.metricMinuets = Math.floor(this.metricTime/100) - this.metricHours*100;
        this.metricSeconds = Math.floor(this.metricTime) - this.metricHours*10000 - this.metricMinuets*100;
    }

    render() {
        return (
            <div className="Metric_Clock">
                <h1>Hello, world!</h1>
                <Metric_Output metricHours={this.metricHours} metricMinuets={this.metricMinuets} metricSeconds={this.metricSeconds} />
            </div>
        );
    }
}

export default Metric_Clock;
