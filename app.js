const express = require('express');
const path = require('path');
const app = express();
const port = 35000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const navbar = [
    { link: "/basic", name: "HOME" },
    { link: "/basic/form", name: "ADDEMPLOYEES" },
];

const basicroutes = require('./routes/basicRoute')(navbar);
app.use('/basic', basicroutes);

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})