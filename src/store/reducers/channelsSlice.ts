import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Channel } from '../models/channel';
import { Message } from '../models/message';

interface ChannelsState {
    ids: number[],
    byId: Record<number, Channel>,
}

const initialState: ChannelsState = {
    ids: [],
    byId: {},
};

const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        postMessagePending: (
            state,
            action: PayloadAction<{ channelId: number, message: Message }>,
        ) => {
            state.byId[action.payload.channelId].messages.push(action.payload.message);
        },
        postMessageSuccess: (
            state,
            { payload }: PayloadAction<{ localMessageId: number, channelId: number, message: Message }>,
        ) => {
            const { localMessageId, channelId, message } = payload;

            state.byId[channelId].messages = state.byId[channelId].messages.map((m) =>
                m.id === localMessageId ? message : m,
            );
        },
        getChannelsSuccess: (state, action: PayloadAction<Channel[]>) => {
            state.ids = action.payload.map(({ id }) => id);
            state.byId = action.payload.reduce<Record<number, Channel>>((acc, channel) => {
                acc[channel.id] = { ...channel, messages: [] };
                return acc;
            }, {});
        },
        getChannelMessagesSuccess: (
            state,
            action: PayloadAction<{ channelId: number, messages: Message[] }>,
        ) => {
            state.byId[action.payload.channelId].messages = action.payload.messages;
        },
    },
});

export const actions = channelsSlice.actions;

export default channelsSlice.reducer;
