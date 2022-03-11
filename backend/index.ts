import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import channelsRoutes from './routes/channels';
import messagesRoutes from './routes/messages';

dotenv.config();

const PORT = process.env.BACKEND_PORT ?? 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(channelsRoutes);
app.use(messagesRoutes);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
