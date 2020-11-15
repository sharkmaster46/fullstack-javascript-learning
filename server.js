import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');
server.listen(config.port, () => {
    console.log(`Express listening on port ${config.port}`);
});

server.get('/', (req, res) =>{
    res.render('index', {
        content: "Hello Express and <em>EJS!</em>"
    });
});
server.use(express.static('public'));
server.use('/api', apiRouter);