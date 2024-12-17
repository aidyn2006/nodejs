const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hi');
});

app.get('/json', (req, res) => {
    res.json({ text: 'hi', numbers: [1, 2, 3] });
});

app.get('/echo', (req, res) => {
    const input = req.query.input || '';
    const response = {
        normal: input,
        shouty: input.toUpperCase(),
        charCount: input.length,
        backwards: input.split('').reverse().join(''),
    };
    res.json(response);
});

app.use('/static', express.static(path.join(__dirname, 'mychat')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
