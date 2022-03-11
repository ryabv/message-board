import { Router } from 'express';

import { postMessageToChannel } from '../controllers/messages';
import { getChannelsList } from '../controllers/channels';

const router = Router();

router.get('/channels', getChannelsList);

router.post('/:id', postMessageToChannel);

export default router;
