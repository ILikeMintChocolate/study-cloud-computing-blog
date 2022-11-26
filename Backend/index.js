const http = require('http')
const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const mysql = require('mysql');
const db = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

db.connect(()=>{
	console.log('success')
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.use(cors());
app.use(express.static('public'));

app.get('/api/post', (req, res) => {
    db.query('SELECT * FROM testtable ORDER BY ID DESC', (error, rows, fields) => {
        res.send(rows)
    })
})

app.get('/api', (req, res) => {
        res.send('Hello World!')
})

app.get('/api/post/:id', (req, res) => {
    let id = req.params.id
    db.query(`SELECT * FROM testtable WHERE ID = ${id}`, (error, rows, fields) => {
        res.send(rows)
    })
})

app.post('/api/post', (req, res) => {
    db.query(
        `INSERT INTO testtable(TITLE, MDValue, Overview, ImgSrc) VALUES ("${req.body.Title}", "${req.body.MDValue}", "${req.body.Overview}", "${req.body.ImgSrc}");`,
        (error, rows, fields) => {
            if (error) throw error
            res.send('success')
        }
    )
})

app.post('/api/login', (req, res) => {
    if(req.body.Password == '9731')
        res.send({result:'success'})
    else
        res.send({result:'fail'})
})

app.delete('/api/post', (req, res) => {
    db.query(`DELETE FROM testtable WHERE ID = ${req.body.id};`, (error, rows, fields) => {
        if (error) throw error
        res.send('success')
    })
})

app.put('/api/post/:id', (req, res) => {
    db.query(
        `UPDATE testtable SET Title = "${req.body.Title}", MDValue = "${req.body.MDValue}", ImgSrc = "${req.body.ImgSrc}", Overview = "${req.body.Overview}" WHERE ID = ${req.params.id};`,
        (error, rows, fields) => {
            if (error) throw error
            res.send('success')
        }
    )
})
