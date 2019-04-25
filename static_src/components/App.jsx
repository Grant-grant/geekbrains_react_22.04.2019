import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Message from './Message';

const messageChoices = ['Привет', 'Здравствуйте', 'Здорова', 'Доброго здоровьица', 'Здрасте'];

export default class App extends React.Component {
    state = {
        child1: 0,
        child2: 0,
        messages: ['Привет', 'Здравствуйте'],
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('prevState   ', prevState,);
        console.log('thisState   ', this.state);
        console.log('App update');
    }

    increaseChild1 = () => {
        this.setState({ child1: this.state.child1 + 1 })
    };

    increaseChild2 = () => {
        this.setState({ child2: this.state.child2 + 1 })
    };

    sendMessage = () => {
        this.setState({ messages: [ ...this.state.messages,
                messageChoices[Math.floor(Math.random()*messageChoices.length)]] })
    };


    render() {
        const messageElements = this.state.messages.map((item, index) => <Message key={ index } text={ item } />);
        return (
            <div>
                <h1>App</h1>
                { messageElements }
                <button onClick={ this.sendMessage }>sendMessage</button>
                <br />
                <br />
                <button onClick={ this.increaseChild1 }>Child1 + 1</button>
                <button onClick={ this.increaseChild2 }>Child2 + 1</button>
                <Child1 counter={ this.state.child1 } />
                <Child2 counter={ this.state.child2 } />
            </div>
        )
    }
}