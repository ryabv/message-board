import { createAsyncThunk } from '@reduxjs/toolkit';

import { channelsController, messagesController } from '../../api';

export const fetchChannels = createAsyncThunk(
    'CHANNELS/GET_CHANNELS',
    async (_, thunkAPI) => {
        try {
            return await channelsController.getChannelsList();
        } catch (e) {
            return thunkAPI.rejectWithValue('Failed to load channels');
        }
    },
);

export const fetchChannelMessages = createAsyncThunk(
    'CHANNELS/GET_CHANNEL_MESSAGES',
    async (channelId: number, thunkAPI) => {
        try {
            const messages = await messagesController.getMessagesByChannelId(channelId);

            return { channelId, messages };
        } catch (e) {
            return thunkAPI.rejectWithValue('Failed to load channel messages');
        }
    },
);

export const postMessageToChannel = createAsyncThunk(
    'CHANNELS/POST_MESSAGE',
    async ({ channelId, text }: { channelId: number, text: string }, thunkAPI) => {
        try {
            const message = await messagesController.postMessageToChannel(channelId, { text });

            return { channelId, message };
        } catch (e) {
            return thunkAPI.rejectWithValue('Failed to save message');
        }
    },
);
