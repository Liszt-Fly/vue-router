const host = `http://127.0.0.1:3003/users`
const all = () => {
	return fetch(host).then((r) => r.json())
}
const find = (id) => {
	return fetch(host + `/${id}`).then((r) => r.json())
}
export { all, find }
