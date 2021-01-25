
let express = require('express')
let path = require('path')
let app = express()

app.get('/home', function(request, response){
		response.sendFile(path.join(__dirname, 'index.html'))
	}
)

app.get('/go', function(request, response){
		response.sendFile(path.join(__dirname, 'go.html'))
	}
)

app.get('/fight', function(request, response){
		response.sendFile(path.join(__dirname, 'fight.html'))
	}
)

app.get('/style', function(request, response){
		response.sendFile(path.join(__dirname, 'style.css'))
	}
)

app.use(express.static('./'))

app.listen(8000)
