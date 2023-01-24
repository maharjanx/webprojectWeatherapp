const express = require("express");
const path = require("path");
const hbs = require('hbs');


const port =process.env.PORT || 9000;
const app = express();

// public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// console.log(` The static path is ${staticPath}`);

app.use(express.static(staticPath));


//setting view engine
app.set("view engine", 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res)=>{
    res.render("index");
    
});

app.get('/about', (req, res)=>{
    res.render("about");
    
});

app.get('/weather', (req, res)=>{
    res.render("weather");
    
});

app.get('/*', (req, res) =>{
    res.render("404error", {
        errorMessage: 'Oops! Page not found',
    });
});

app.listen(port, ()=>{
    console.log(`listning to the url http//:localhost:${port}`);
})