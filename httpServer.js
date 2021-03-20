'use strict';
const path = require('path');
const hapi = require('@hapi/hapi');

const init = async () => {
    const server = hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            files: {
                relativeTo: path.join(__dirname)
            }
        }
    });
    await server.register(require('@hapi/inert'));

    server.route({
        method: 'GET',
        path: '/index.html',
        handler: (request, h) => {
            return h.file('./index.html');
            // return 'Hello World!';
        }
    });

    await server.start();
};

init();
