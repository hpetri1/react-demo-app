import React from 'react';
import ReactDOM from 'react-dom';

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

// const title = React.createElement(
//     'h1',
//     {id: 'title', className: 'header', style: style},
//     'This is my React demo app'
// )

ReactDOM.render(
    <div>
        <h1>This is my React demo app</h1>
        <p>Chick this out</p>
    </div>,
    document.getElementById('root')
)
