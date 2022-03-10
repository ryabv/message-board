import {RootState} from "../store";

export const channelByIdSelector = (id: number | null) =>
    (state: RootState) => id ? state.channelsReducer.byId[id] : null;

export const getChannelsList = (state: RootState) => Object.values(state.channelsReducer.byId);
