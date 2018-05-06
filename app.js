const Hapi = require('hapi');

const db = require('./mongodb');
const routes = require('./routes');
// const routes = require('./routes/place');
//server方法直接返回server实例对象
const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
});

// console.log(routes);
server.route(routes);

const init = async () => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'hello world!';
    }
  });
  await server.start();
  console.log('Server started on 3000!');
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
