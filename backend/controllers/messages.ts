import { channelsMessages } from '../db/channels-messages';
import { messages } from '../db/messages';

export const getMessagesByChannelId = (req, res) => {
    res.json(messages.filter(({ id }) => channelsMessages[req.params.channelId].includes(id)));
};

export const postMessageToChannel = (req, res) => {
    const newMessage = {
        id: Date.now(),
        text: req.body.text,
    };

    messages.push(newMessage);
    channelsMessages[req.params.id].push(newMessage.id);

    res.json(newMessage);
};
