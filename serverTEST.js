var express = require('express')
var app = express()

app.use(express.static('public'))
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
app.get('/loadall', function (req, res) {
		var id = req.query.id
		var name = req.query.name
		console.log('id=', id)
		console.log('name=', name)
	  //res.send('test Hello World!')
		var mysql = require('mysql')
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'ducdvd',
		  password : 'willway',
		  database : 'clivia'
		});
	
	
	
	
		connection.connect()
	
		connection.query('SELECT * from blogs', function (err, rows, fields) {
	
		  if (err) throw err
	
		  //console.log('The solution is: ', rows[0].solution)
			//total = rows[0].solution
			//res.send('test Hello World 5555!' + rows[0].solution)
			 res.json(rows);
	
		})
	
		connection.end()



})
app.post('/savepost', function (req, res) {
		var title = req.query.title
		var description = req.query.description
		console.log('title=', title)
		console.log('description=', description)
	  //res.send('test Hello World!')
		var mysql = require('mysql')
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'ducdvd',
		  password : 'willway',
		  database : 'clivia'
		});
	
	
	
	
		connection.connect()
	
		connection.query('insert into blogs(`title`,`description`) values("' + title + '","' + description + '")', function (err, rows, fields) {
	
		  if (err) throw err
	
		  //console.log('The solution is: ', rows[0].solution)
			//total = rows[0].solution
			//res.send('test Hello World 5555!' + rows[0].solution)
			 //res.json(rows);
	
		})
	
		connection.end()



})
