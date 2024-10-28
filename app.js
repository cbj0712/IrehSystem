const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '/client')));

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/index.html'), (err) => {
        if(err) {
            res.status(500).send(err);
        }
    });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'PORT is ready...');
});