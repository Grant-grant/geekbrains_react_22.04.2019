export const SEND_MESSAGE = '@@test/SEND_MESSAGE';

export const sendMessage = (text, sender) => ({
    type: SEND_MESSAGE,
    text,
    sender,
});
