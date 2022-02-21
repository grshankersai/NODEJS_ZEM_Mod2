const http = require("http");
const routes = require('./routes');


const rqListner = (req, res) => {
  //console.log(req.url , req.method , req.headers);
  //process.exit();

  

 
};

const server = http.createServer(routes);

server.listen(3000);
