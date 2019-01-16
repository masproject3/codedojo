import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import todos from './todos'
import Header from "./components/Header";
import Todo from "./components/Todo";
import From from "./components/Form";

class App extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        }

    }

    handleStatusChannge (id) {
        let todos = this.state.todos.map(todo => {
            if (todo.id ===id) {
                todo.completed = !todo.completed
            }
            return todo;
        });

        this.setState(
            {
                todos:todos
            }
        );
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState(
            {
                todos:todos
            }
        );
    }

    nextId () {
        this._nextId = this._nextId || 4;
        return this._nextId++;
    }

    handleAdd (title) {
        console.log(title);
        let todo = {
            id: this.nextId(),
            title:title,
            complited:false
        };

        let todos = this.state.todos.concat(todo);

        this.setState({
            todos
        });
    }

    handleEdit(id, title) {
        let todos = this.state.todos.map(todo=> {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });

        this.setState({todos});
    };

    render () {
        return (
            <main>
                <Header
                    title={this.props.title}
                    todos={this.state.todos}
                />
                <ReactCSSTransitionGroup
                    component="section"
                    className="todo-list"
                    transitionName="slide" // .slide-enter .slide-enter-active .slide-leave .slide-leave-active
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    // transitionEnter={false} - отключение анимации
                    // transitionLeave={false} - отключение анимации
                >
                    {
                        this.state.todos.map(todo =>
                            <Todo
                                title={todo.title}
                                completed={todo.completed}
                                key={todo.id}
                                id={todo.id}
                                onStatusChange={()=> this.handleStatusChannge(todo.id)}
                                onDelete={() => this.handleDelete(todo.id)}
                                onEdit={this.handleEdit.bind(this)}
                            />
                        )
                    }
                </ReactCSSTransitionGroup>
                <From onAdd={this.handleAdd.bind(this)}/>
            </main>
        );
    }

}

App.propTypes = {
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired,
        id: React.PropTypes.number.isRequired
    })).isRequired
};

App.defaultProps = {
    title: 'React Todo'
};

ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));
