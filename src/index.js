import React, { Component} from 'react';
import {render} from 'react-dom';

let moneyRaised = {
    total: 25000,
    daily: 750,
    goal: 55000
}

class Message extends Component {
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

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const MoneyRaised = ({total, daily, goal}) => {
    return (
        <section>
                <div>
                    <h2>Money Raised</h2>
                </div>
                <div>
                    <p>To date: ${total}</p>
                </div>
                <div>
                    <p>Daily amount: ${daily}</p>
                </div>
                <div>
                    <p>Goal: ${goal}</p>
                </div>
                <div>
                    <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
                </div>
            </section>
    )
}

render( 
    <div>
        <Message color="purple" textheading="This is my React demo app" percent={100} />
        <MoneyRaised total={moneyRaised.total} daily={moneyRaised.daily} goal={moneyRaised.goal}/>
    </div>,
    document.getElementById('root')
)
