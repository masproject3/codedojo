import React from 'react';

function Stats (props) {
    let total = props.todos.length;
    let complited = props.todos.filter(todo => todo.completed).length;
    let notComplited = props.todos.filter(todo => todo.completed === false).length;
    return (
        <table className="stats">
            <tbody>
            <tr>
                <th>Всего задач</th>
                <td>{total}</td>
            </tr>
            <tr>
                <th>Выполнено</th>
                <td>{complited}</td>
            </tr>
            <tr>
                <th>Осталось</th>
                <td>{notComplited}</td>
            </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: React.PropTypes.array.isRequired
};

Stats.defaultProps = {

};

export default Stats;