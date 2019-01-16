import React from 'react';
import Button from "./Button";


class Stopwatch extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            running: false,
            time: 0
        };

        this.tick = this.tick.bind(this);
    }

    handleStart() {
        this.setState({
            running:true

        });
    }

    handlePause() {
        this.setState({running:false});
    }

    handleStop(){
        this.setState({
            running:false,
            time: 0
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    tick() {

        let time = this.state.time;
        if (this.state.running) {
            time = time + 1;
            this.setState({time});
        }
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    format(sec) {
        let minutes = Math.floor(sec/1000);
        return `${minutes > 9 ? minutes : '0'+minutes}:${sec > 9 ? sec : '0'+sec}`;
    }

    render() {
        let time = this.format(this.state.time);

        return (
            <section className="stopwatch">
                <div className="stopwatch-time">{time}</div>
                <div className="stopwatch-controls">
                    {this.state.running
                        ?    <Button className={"icon"} icon={"pause"} onClick={() => this.handlePause()}/>
                        :    <Button className={"icon"} icon={"play_arrow"} onClick={() => this.handleStart()}/>
                    }
                    <Button className={"icon"} icon={"stop"} onClick={() => this.handleStop()}/>
                </div>
            </section>
        )
    }

}

Stopwatch.propTypes = {

};

Stopwatch.defaultProps = {

};
export default Stopwatch;