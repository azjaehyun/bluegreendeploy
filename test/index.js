const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello Gitlab!!!!!!안녕하세요!!!!!!!')
})

app.listen(8900, function() {
    console.log('Example app listening on port 8900!')
    console.log('Example app ^^')
})
