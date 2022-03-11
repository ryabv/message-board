import { channelsMessages } from '../db/channels-messages.js';
import { messages } from '../db/messages.js';

export const getMessagesByChannelId = (req, res) => {
    res.json(messages.filter(({ id }) => channelsMessages[req.params.channelId].includes(id)));
};
