const placeRoutes = require('./place');

let routes = [];
// routes.concat方法返回连接后的数组，但是并不是改变routes数组本身！
const newRoutes = routes.concat(placeRoutes);
// console.log(routes);
module.exports = newRoutes;
