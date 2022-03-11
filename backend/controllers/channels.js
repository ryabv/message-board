import { channels } from '../db/channels.js';
import { channelsMessages } from '../db/channels-messages.js';
import { messages } from "../db/messages.js";

export const getChannelsList = (req, res) => {
    res.json(channels.map(({ id, title }) => ({ id, title })));
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
