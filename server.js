const express = require ("express");
const path = require ("path");
const PORT = process.env.PORT || 8000;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})