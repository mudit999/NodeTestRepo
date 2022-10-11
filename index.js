const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 1450;

app.get('/', (req,res) => {
    res.send('Learning Render to deploy node.js app');
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})