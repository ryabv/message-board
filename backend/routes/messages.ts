import { Router } from 'express';

import { getMessagesByChannelId } from '../controllers/messages';

const router = Router();

router.get('/messages/:channelId', getMessagesByChannelId);

export default router;
