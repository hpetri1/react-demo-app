import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return (
            <div style={style}>
                <h1 id="heading-element" style={{color: this.props.color}}>{this.props.textheading}</h1>
                <p>I like it {this.props.percent}%</p>
            </div>
        )
    }
}

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

ReactDOM.render( 
    <Message color="purple" textheading="This is my React demo app" percent={100} />,
    document.getElementById('root')
)
