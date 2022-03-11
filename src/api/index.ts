export const channelsController = {
    getChannelsList(): Promise<any> {
        return fetch('http://localhost:3001/channels')
            .then(
                (res) => {
                    return res.json();
                },
                (exception) => {
                    throw new Error(exception);
                },
            );
    },
};

export const messagesController = {
    getMessagesByChannelId(id: number): Promise<any> {
        return fetch(`http://localhost:3001/messages/${id}`)
            .then(
                (res) => {
                    return res.json();
                },
                (exception) => {
                    throw new Error(exception);
                },
            );
    },

    postMessageToChannel(id: number, data: { text: string }): Promise<any> {
        return fetch(`http://localhost:3001/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(
                (res) => {
                    return res.json();
                },
                (exception) => {
                    throw new Error(exception);
                },
            );
    },
};
