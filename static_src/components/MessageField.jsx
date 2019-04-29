import React from 'react';
import Message from './Message';
import TextField from 'material-ui/TextField';


export default class MessageField extends React.Component {
    state = {
        messageList: [1, 2],
        messages: {1: {'text': 'Привет', 'sender': 'me'}, 2: {'text': 'Здравствуйте', 'sender': 'bot'}},
        input: '',
        nextId: 3,
        test: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        const { nextId, messages, messageList } = this.state;
        const lastSender = messages[nextId - 1].sender;
        if (lastSender === 'me' && messageList.length > prevState.messageList.length ) {
            setTimeout(() => this.handleSendMessage('Отстань, я робот!', 'bot'), 500)
        }
    }

    incTest = () => {
        this.setState({ test: this.state.test + 1 })
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = (text, sender) => {
        const { messageList, messages, nextId } = this.state;
        this.setState({
            messageList: [ ...messageList, nextId],
            messages: { ...messages, [nextId]: { text, sender } },
            input: '',
            nextId: nextId + 1,
        })
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input, 'me');
        }
    };

    render() {
        const { messages, messageList, input } = this.state;
        const messageElements = messageList.map((messageId, index) =>
            <Message key={ index } incTest={ this.incTest } text={ messages[messageId].text } />);
        return (
            <div>
                { messageElements }
                <TextField
                    onKeyUp={ this.handleKeyUp }
                    label="Name"
                    underlineStyle={{ color: 'red' }}
                    name="input"
                    value={ input }
                    onChange={ this.handleInput }
                    placeholder="Введите сообщение"
                />
                <button onClick={ () => this.handleSendMessage(input, 'me') }>Отправить сообщение</button>
            </div>
        )
    }
}