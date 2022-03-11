import { Router } from 'express';
import { getMessagesByChannelId } from '../controllers/messages.js';
const router = Router();

router.get('/messages/:channelId', getMessagesByChannelId);

export default router;
