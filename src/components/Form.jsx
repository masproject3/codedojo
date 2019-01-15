import React from 'react';
import Button from "./Button";

class From extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: ''
        };

    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({title: ''});
        }

    };

    handleChange(event) {
        let title = event.target.value;

        this.setState({title});
    }


    render() {

        return (
            <form action="" className="todo-form" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" value={this.state.title} placeholder={"Что нужно сделать?"} onChange={this.handleChange.bind(this)}/>

                <Button type="submit">Добавить</Button>
            </form>
        )
    }

}

From.propTypes = {
    onAdd: React.PropTypes.func.isRequired
};

export default From;