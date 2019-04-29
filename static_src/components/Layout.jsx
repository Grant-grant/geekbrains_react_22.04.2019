import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';


export default class Layout extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <div>
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        )
    }
}