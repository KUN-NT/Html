//请求NodeJs自带http模块
import { createServer } from "http";

createServer(function(request,response){
    response.writeHead('200',{'Content-Type':'text/plain'});

    response.end('Hello World\n');
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888");