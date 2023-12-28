const connectToMongo = require('./db');
const express = require('express');

const app = express();
const PORT = 5000;

connectToMongo();

app.use(express.json());    

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
