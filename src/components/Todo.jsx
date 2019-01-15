import React from 'react';
import Checkbox from "./Checkbox";
import Button from "./Button";


class Todo extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            editing: false
        };

    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;
        this.props.onEdit(this.props.id, title);

        this.setState({editing: false});
    }

    renderDispaly () {
        return (
            <div className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox
                    checked={this.props.completed}
                    onChange={()=> this.props.onStatusChange()}
                />
                <span className="todo-title">{this.props.title}</span>
                <Button
                    className={"edit icon"}
                    icon={"edit"}
                    onClick={()=> this.setState({editing:true})}
                />
                <Button
                    className={"delete icon"}
                    icon={"delete"}
                    onClick = {this.props.onDelete}
                />


            </div>
        );
    }

    renderForm () {
        return (
            <form className = "todo-edit-form" onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" ref="title" defaultValue={this.props.title}/>
                <Button
                    className={"save icon"}
                    icon={"save"}
                    type={"submit"}
                />
            </form>
        );
    }

    render() {
        return (this.state.editing ? this.renderForm() : this.renderDispaly())
    }

}

Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool,
    onStatusChange: React.PropTypes.func,
    onDelete: React.PropTypes.func,
    onEdit:React.PropTypes.func
};

Todo.defaultProps = {
    completed: false,
    onStatusChange: ()=>function () {},
    onDelete: ()=>function () {}
};
export default Todo;