const { Random } = require("mockjs")
const mock = require("mockjs")
const random = mock.Random
module.exports = () => {
	let data = { articles: [], users: [] }
	for (let i = 0; i <= 10; i++) {
		data.articles.push({
			id: i,
			title: random.cword(10, 20),
			content: Random.cparagraph(600, 800),
		})

		data.users.push({
			id: i,
			name: random.cword(2, 4),
		})
	}
	return data
}
