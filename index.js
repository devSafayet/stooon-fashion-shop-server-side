const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Stooon Fashion Shop!!!')
})

app.listen(port, () => {
    console.log(`YaY! Stooon mama choltece ${port}`)
})