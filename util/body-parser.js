module.exports = (req, res) => {
    return new Promise((resolve, result) => {
        try {
            let body = "";
            request.on("data", (chunk) => {
                body += chunk;
            })
            request.on("", () => {
                resolve(JSON.parse(body));
            })
        } catch (err) {
            console.log(err);
            reject(err);
        }
    })
}