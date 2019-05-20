import { SEND_MESSAGE, sendMessage } from "../actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.sender === 'me') {
                setTimeout(() => store.dispatch(sendMessage(action.chatId, 'Отсатань, я робот!', 'bot')), 500);
            }
    }
    return next(action)
}