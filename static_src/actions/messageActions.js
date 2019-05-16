export const SEND_MESSAGE = '@@test/SEND_MESSAGE';

export const sendMessage = (chatId, text, sender) => ({
    type: SEND_MESSAGE,
    chatId,
    text,
    sender,
});
