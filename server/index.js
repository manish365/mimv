import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from '../src/App';

const PORT = process.env.PORT || 5000;

const app = express();


app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="main-content"></div>', `<div id="main-content">${app}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});