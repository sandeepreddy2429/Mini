var exp = require('express');
var app = exp();
var cors = require("cors");
var userApi = require("./ApiModules/User");
app.use(cors());

app.use(exp.json());
 
app.use("/User",userApi);

app.listen(9090,()=>{
    console.log("Server Started!!");
})
