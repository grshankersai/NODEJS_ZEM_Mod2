const http = require('http');

const rqListner = (req,res)=>{
    console.log(req);
    const url = req.url;
    const method = req.method;

    if(url == '/'){
        res.write("<html>");
        res.write("<head><title>Assignment App</title></head>");
        res.write("<body><h1>Welcome to root Page</h1><br/> <form action='/createUser' method='POST' ><input type='text' placeholder='Username' name='message' /> <button type='submit'>Submit</button></form></body>");
        return res.end();

    }

    if(url == '/users'){
        res.write("<html>");
        res.write("<head><title>Assignment App</title></head>");
        res.write("<body><ul><li>User1</li></ul></body>");
        return res.end();


    }

    if(url == '/createUser' && method=='POST'){
        const data = [];
        req.on('data',(chunk)=>{
            data.push(chunk);
        });
        req.on('end',()=>{
            const parseBody = Buffer.concat(data).toString();
             const message = parseBody.split('=')[1];
             console.log(message);
        })

    }



}

const server = http.createServer(rqListner);
server.listen(3000);