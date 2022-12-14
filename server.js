const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on port ${PORT}`)
})