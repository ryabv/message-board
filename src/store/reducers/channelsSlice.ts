import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Channel } from '../models/channel';
import { Message } from '../models/message';
import { fetchChannelMessages, fetchChannels, postMessageToChannel } from '../side-effects/channels';

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
    reducers: {},
    extraReducers: {
        [fetchChannels.fulfilled.type]: (state, action: PayloadAction<Channel[]>) => {
            state.ids = action.payload.map(({ id }) => id);
            state.byId = action.payload.reduce<Record<number, Channel>>((acc, channel) => {
                acc[channel.id] = { ...channel, messages: [] };
                return acc;
            }, {});
        },
        [fetchChannelMessages.fulfilled.type]: (
            state,
            action: PayloadAction<{ channelId: number, messages: Message[] }>,
        ) => {
            state.byId[action.payload.channelId].messages = action.payload.messages;
        },
        [postMessageToChannel.fulfilled.type]: (
            state,
            action: PayloadAction<{ channelId: number, message: Message }>,
        ) => {
            state.byId[action.payload.channelId].messages.push(action.payload.message);
        },
    }
});

export const actions = channelsSlice.actions;

export default channelsSlice.reducer;
