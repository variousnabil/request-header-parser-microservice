const express = require('express');
const app = express();

app.listen(8000);

app.get('/api/whoami', (req, res) => {
    const regexIP = /\d+.\d+.\d+.\d+/;
    const ipaddress = req.connection.remoteAddress.match(regexIP);
    res.json({
        ipaddress: ipaddress ? ipaddress[0] : 'no ip',
        language: req.headers["accept-language"],
        software: req.headers["user-agent"]
    });
});