import { channels } from '../db/channels';

export const getChannelsList = (req, res) => {
    res.json(channels);
};
