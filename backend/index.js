const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

const app = express();
const PORT = 5000;

connectToMongo();

app.use(cors());
app.use(express.json());    

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`NimbusNote backend listening at http://localhost:${PORT}`);
})
