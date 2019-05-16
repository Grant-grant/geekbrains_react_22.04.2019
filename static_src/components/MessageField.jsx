import React from 'react';
import PropTypes from "prop-types";
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/messages.scss';
import {bindActionCreators} from "redux";
import { sendMessage } from "../actions/messageActions";
import connect from "react-redux/es/connect/connect";


class MessageField extends React.Component {
    static propTypes = {
        messageList: PropTypes.arrayOf(PropTypes.number).isRequired,
        messages: PropTypes.object.isRequired,
        nextId: PropTypes.number.isRequired,
        sendMessage: PropTypes.func.isRequired,
        chatId: PropTypes.number,
        chats: PropTypes.object.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: '',
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleSendMessage = (text, sender) => {
        this.setState({ input: '' });
        this.props.sendMessage(this.props.chatId, text, sender);
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input, 'me');
        }
    };

    render() {
        const { messages, messageList, chats, chatId } = this.props;
        const { input } = this.state;
        const messageElements = chats[chatId].messageList.map((messageId, index) =>
            <Message key={ index } text={ messages[messageId].text } sender={ messages[messageId].sender } />);
        return (
            <div>
                <div className="message-field">
                    { messageElements }
                </div>
                <TextField
                    style={{ width: '90%' }}
                    onKeyUp={ this.handleKeyUp }
                    label="Name"
                    underlineStyle={{ color: 'red' }}
                    name="input"
                    value={ input }
                    onChange={ this.handleInput }
                    placeholder="Введите сообщение"
                />
                <FloatingActionButton onClick={ () => this.handleSendMessage(input, 'me') }>
                        <SendIcon />
                </FloatingActionButton>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({
    messageList: messageReducer.messageList,
    messages: messageReducer.messages,
    nextId: messageReducer.nextId,

    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
