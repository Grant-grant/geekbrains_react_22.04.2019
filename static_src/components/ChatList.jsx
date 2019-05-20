import React from 'react';
import PropTypes from "prop-types";
import { push } from 'react-router-redux';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import ContentSend from 'material-ui/svg-icons/content/send';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { loadChats } from "../actions/apiActions";


class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        chatList: PropTypes.arrayOf(PropTypes.number).isRequired,
        chats: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
        loadChats: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    componentDidMount() {
        this.props.loadChats();
    }

    handleClick = (chatId) => {
        this.props.push(`/chat/${chatId}/`);
    };

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }

        const { chatList, chats } = this.props;

        const chatElements = chatList.map((chatId) =>
            <ListItem
                key={ chatId }
                primaryText={ chats[chatId].name }
                onClick={ () => this.handleClick(chatId) }
                leftIcon={<ContentSend />}
            />);

        return (
            <List>
                { chatElements }
            </List>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chatList: chatReducer.chatList,
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ push, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
