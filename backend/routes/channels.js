import { Router } from 'express';
import { getChannelsList, postMessageToChannel } from '../controllers/channels.js';
const router = Router();

router.get('/channels', getChannelsList);

router.post('/:id', postMessageToChannel);

export default router;
