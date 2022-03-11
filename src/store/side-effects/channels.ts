import { channelsController, messagesController } from '../../api';
import { AppDispatch } from '../store';
import { actions } from '../reducers/channelsSlice';

export const fetchChannels = () => async (dispatch: AppDispatch) => {
    const channels = await channelsController.getChannelsList();
    dispatch(actions.getChannelsSuccess(channels));
};

export const fetchChannelMessages = (channelId: number) => async (dispatch: AppDispatch) => {
    const messages = await messagesController.getMessagesByChannelId(channelId);
    dispatch(actions.getChannelMessagesSuccess({ channelId, messages }));
};

export const postMessageToChannel = ({ channelId, text }: { channelId: number, text: string }) =>
    async (dispatch: AppDispatch) => {
        const localMessageId = Date.now();
        dispatch(actions.postMessagePending({ channelId, message: { id: localMessageId, text } }));

        const message = await messagesController.postMessageToChannel(channelId, { text });
        dispatch(actions.postMessageSuccess({ channelId, localMessageId, message }));
    };
