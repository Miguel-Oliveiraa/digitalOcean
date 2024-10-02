const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Use a variável de ambiente PORT

app.get('/', (req, res) => {
    res.send('Hello migas!');
});

app.listen(port, '0.0.0.0', () => {  // Escute em 0.0.0.0
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
