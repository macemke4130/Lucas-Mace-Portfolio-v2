export const api = async (uri, method = "GET", body = {}) => {
    const headers = { };
    const options = {
        method,
        headers
    }

    if (method === "POST" || method === "PUT") {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    try {
        const res = await fetch(uri, options);

        if (res.status === 404) {
            throw new Error("Check URI and Server Path.");
        }

        if (res.status === 500) {
            throw new Error("Check Server Terminal.");
        }

        if (res.ok) {
            return await res.json();
        }
    } catch (e) {
        console.error(e);
    }
};