const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let app = express();
let formPath = path.join(__dirname, '/form.json');

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

// app.use((req, res, next) => {
//     console.log(`${req.url}`);
//     next();
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/formsubmissions', (req, res, next) => {

    fs.writeFile(formPath, JSON.stringify(req.body, null, 2), err => {
        if (err) console.log(err);
        
    })

    fs.readFile(formPath, (err, data) => {
        if (err) console.log(err);
        console.log(JSON.parse(data));
    })

    res.redirect('/');
});

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/order/:id', (req, res) => {
//     let id = req.params.id;
//     res.send(id);
// });

app.listen(3000);
