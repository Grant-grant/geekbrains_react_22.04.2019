import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//     'h1',
//     {},
//     'Element',
// );

const component = (innerHTML) => <h1>{ innerHTML }</h1>;

ReactDOM.render(
    component,
    document.getElementById('root'),
);
