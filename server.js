// express server
const express = require('express');
const app = express();
const port = 3000;

// home route res.send 

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// listening on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});