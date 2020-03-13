import React from 'react';
import ReactDOM from 'react-dom';

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'This is my React demo app'
)

ReactDOM.render(
    title,
    document.getElementById('root')
)
