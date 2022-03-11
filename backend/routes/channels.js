import { Router } from 'express';
import { postMessageToChannel } from '../controllers/messages.js';
import { getChannelsList } from '../controllers/channels.js';
const router = Router();

router.get('/channels', getChannelsList);

router.post('/:id', postMessageToChannel);

export default router;
