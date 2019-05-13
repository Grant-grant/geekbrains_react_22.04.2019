import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/layout.scss';


export default class Layout extends React.Component {
    // state = {
    //     messageList: [1, 2],
    //     messages: {1: {'text': 'Привет', 'sender': 'me'}, 2: {'text': 'Здравствуйте', 'sender': 'bot'}},
    //     nextId: 3,
    // };

    // sendMessage = (text, sender) => {
    //     const { messageList, messages, nextId } = this.state;
    //     this.setState({
    //         messageList: [ ...messageList, nextId],
    //         messages: { ...messages, [nextId]: { text, sender } },
    //         nextId: nextId + 1,
    //     })
    // };

    render() {
        // const { messageList, messages } = this.state;

        return (
            [
                <Header key="header" />,
                <div key="layout" className="layout">
                    <div className="layout-left-side">
                        <ChatList />
                    </div>
                    <div className="layout-right-side">
                        <MessageField />
                    </div>
                </div>,
            ]
        )
    }
}