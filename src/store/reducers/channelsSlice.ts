import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Channel } from '../models/channel';

interface ChannelsState {
    ids: number[],
    byId: Record<number, Channel>,
}

const initialState: ChannelsState = {
    ids: [1, 2, 3],
    byId: {
        1: {
            id: 1,
            title: '#channel-one',
            messages: [],
        },
        2: {
            id: 2,
            title: '#channel-two',
            messages: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        },
        3: {
            id: 3,
            title: '#channel-three',
            messages: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...'
                },
            ]
        },
    }
};

const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<{ channelId: number, text: string }>) {
            state.byId[action.payload.channelId].messages.push({ id: Date.now(), text: action.payload.text })
        },
    },
});

export const actions = channelsSlice.actions;

export default channelsSlice.reducer;
