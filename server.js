const express = require('express');
const path = require('path');
const html = require('./routes/html')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/', html)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
