import { request } from '../utils/network';

export const channelsController = {
    getChannelsList() {
        return request('/channels');
    },
};

export const messagesController = {
    getMessagesByChannelId(id: number) {
        return request(`/messages/${id}`);
    },

    postMessageToChannel(id: number, data: { text: string }) {
        return request(`/${id}`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    },
};
