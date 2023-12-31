const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
        res.write("<form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const message = parsedData.split('=')[1];
            console.log(message)
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

module.exports = {
    handler: requestHandler
}