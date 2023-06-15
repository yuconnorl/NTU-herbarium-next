export const fetcher = (url) => fetch(url, { method: 'POST' }).then((res) => res.json())
