import express from 'express';

import channelsRoutes from './routes/channels.js';
import messagesRoutes from './routes/messages.js';

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(channelsRoutes);
app.use(messagesRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});
