const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

export const request = (
    path: string,
    config?: RequestInit,
) => {
    const options: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        ...config,
    };

    return new Promise<Response>((resolve, reject) => {
       return fetch(BACKEND_URL + path, options).then(
           (res) => {
               if (res.status !== 200) {
                   reject(res);
               }

               resolve(res);
           },
           reject
       );
    }).then((res) => {
        if (res.headers.get('Content-Type')?.includes('application/json')) {
            return Promise.resolve(res.json());
        }

        return Promise.resolve(res);
    }).catch((exception) => {
        throw new Error(exception);
    });
};
