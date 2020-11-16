import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import axios from 'axios';
import config from './config';
import { response } from 'express';

const serverRender = () =>
        axios.get(`${config.serverUrl}/api/contests`)
        .then(res => {
        return {
            initialMarkUp : ReactDOMServer.renderToString(
                <App initialContests = {res.data.contests} />
                ),
            initialData : res.data
        }; 
    });

export default serverRender;