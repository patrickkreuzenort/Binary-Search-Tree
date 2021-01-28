const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) => {
    res.send(res.sendFile(path.join(__dirname + 'page/main.html')));
})

app.listen(3000, () => {
    console.log('Server is listening with the port 3000');
});