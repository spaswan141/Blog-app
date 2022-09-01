require("dotenv").config();
const express = require("express");

const connection = require("./db");
const blogRouter=require('./routes/blog')
const reviewRouter=require('./routes/review')
var cors = require('cors')
const app = express();

connection();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",["https://shubham-paswan-blog.netlify.app"],"*",);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",'GET,PUT,DELETE,POST');
    next();
});
app.use("/",blogRouter);
app.use('/',reviewRouter)


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));



