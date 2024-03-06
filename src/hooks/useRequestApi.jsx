export const requestApi = async ({ url, type, data = undefined }) => {
    if (!data) {
        return await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json());
    }
    return await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
        method: type,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
};
