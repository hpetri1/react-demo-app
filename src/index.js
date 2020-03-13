import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div style={style}>
                <h1 id="heading-element">This is my React demo app</h1>
                <p>Check this out</p>
            </div>
        )
    }
}

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
    <Message />,
    document.getElementById('root')
)
