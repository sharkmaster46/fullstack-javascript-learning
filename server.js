import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname,'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');
server.listen(config.port, config.host, () => {
    console.log(`Express listening on port ${config.port}`);
});

server.get('/', (req, res) =>{
    serverRender()
    .then(({initialMarkUp, initialData}) => {
        res.render('index', {
            initialMarkUp,
            initialData
        });
    })
    .catch(console.error);
});
server.use(express.static('public'));
server.use('/api', apiRouter);
