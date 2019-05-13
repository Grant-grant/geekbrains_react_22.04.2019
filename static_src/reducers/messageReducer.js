import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    // chats: {1: {"name": 'chat1', "messageList": [1, 2]} },
    messageList: [1, 2],
    messages: {1: {'text': 'Привет', 'sender': 'me'}, 2: {'text': 'Здравствуйте', 'sender': 'bot'}},
    nextId: 3,
};


export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { messageList, messages, nextId } = store;
            return update(store, {
                messageList: { $set: [ ...messageList, nextId] },
                messages: { $set: { ...messages, [nextId]: { text: action.text, sender: action.sender } } },
                nextId: { $set: nextId + 1 },
            });
        }
        default:
            return store;
    }
}