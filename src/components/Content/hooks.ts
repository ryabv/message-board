import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { channelByIdSelector } from '../../store/selectors/channels';
import { fetchChannelMessages } from '../../store/side-effects/channels';

export const useFetchChannelData = (channelId: number | null) => {
    const channel = useAppSelector(channelByIdSelector(channelId));
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!channel?.messages.length && channelId) {
            dispatch(fetchChannelMessages(channelId));
        }
    }, [channel?.messages.length, channelId]);

    return channel;
};
