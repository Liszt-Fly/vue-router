import { routes } from "./routes"

export const getRoutes = async () => {
	const permissions = await fetch(`http://127.0.0.1:3004/permissions`).then(
		(r) => r.json()
	)

	let f = routes.filter((route) => {
		return route.meta.permissions?.every((p) => permissions.includes(p))
	})

	return f
}
