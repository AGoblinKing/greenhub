// sync load the settings file
const fs = require('fs')
const settings = {}
let last = 0

try {
	const file = fs.readFileSync('./settings.json', { encoding: 'utf-8' })
	if (file) {
		Object.assign(settings, JSON.parse(file))
	}
} catch (ex) {
	console.log(ex)
}

module.exports = {
	has(key) {
		return settings[key] !== undefined
	},
	get(key) {
		return settings[key]
	},
	set(key, value) {
		settings[key] = value

		const now = Date.now()
		const dt = now - last < 1000
		last = now

		if (dt) return

		fs.writeFile(
			'./settings.json',
			JSON.stringify(settings),
			{ flag: 'w' },
			function (err) {
				if (err) throw err
				console.log("It's saved!")
			}
		)
	},
}
