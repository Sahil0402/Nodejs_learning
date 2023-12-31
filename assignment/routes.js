const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Hello!! Welcome send some message</h1>");
        res.write("<form action='/create-user' method='POST'>")
        res.write("<input type='text' name='username'/>");
        res.write("<button type='submit'>Create</button>");
        res.write("</form>")
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/users") {
        res.write("<html>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li>User-1");
        res.write("</li>");
        res.write("<li>User-2");
        res.write("</li>");
        res.write("<li>User-3");
        res.write("</li>");
        res.write("<li>User-4");
        res.write("</li>");
        res.write("<ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const loggedMessage = parsedData.split("=")[1];
            console.log(loggedMessage);
        })
        return res.end();
    }
}
module.exports = requestHandler;