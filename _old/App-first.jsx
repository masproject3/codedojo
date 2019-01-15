import React from 'react';
import ReactDom from 'react-dom';

const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', { className: 'subtitle'}, 'это мое первое приложение на React');
const container = React.createElement('div', null, title, subtitle);

const app = (
  <div>
    <h1>React Todo</h1>
    <p className="subtitle">Это мое первое приложение на React</p>
  </div>
);

ReactDom.render(app, document.getElementById('root'));