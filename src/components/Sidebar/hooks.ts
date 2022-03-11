import { useEffect } from 'react';

import { fetchChannels } from '../../store/side-effects/channels';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getChannelsList } from '../../store/selectors/channels';

export const useFetchChannels = () => {
    const channels = useAppSelector(getChannelsList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchChannels());
    }, [dispatch]);

    return channels;
};
