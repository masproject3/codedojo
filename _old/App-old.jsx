import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <main>
      <header>
        <h1>React Todo</h1>
      </header>
      <section className="todo-list">
        <div className="todo">
          <button className="checkbox icon">
            <i className="material-icons">check_box_outline_blank</i>
          </button>
          <span className="todo-title">Изучить React</span>
        </div>
      </section>
    </main>
  )
}
ReactDom.render(<App />, document.getElementById('root'));