import { channels } from '../db/channels.js';

export const getChannelsList = (req, res) => {
    res.json(channels);
};
