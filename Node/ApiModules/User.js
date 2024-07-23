var exp =  require("express")
var router = exp.Router();
var {MongoClient} = require('mongodb');

const MONGODB_URL = 'mongodb://localhost:27017'
const DATABASE_NAME = 'justData';
const client = new MongoClient(MONGODB_URL);
 
router.post("/user",(req,res)=>{
    res.end("express post")
})
router.get("/getData",async (req,res)=>{
    await client.connect();
    
     
   let db = client.db(DATABASE_NAME);

   let dbResult = await db.collection("project").find({}).toArray();
   console.log(dbResult);
 
   // res.status(200).json({"message":"connected"})
   res.status(200).json(dbResult)
})
router.post("/postData",async (req,res)=>{
    let {email,name,phone} = req.body;
    let data = {
        "email":email,
        "name":name,
         "phone":phone
    }
    console.log(data);
    
    await client.connect();
     
    let db = client.db(DATABASE_NAME);

    let dbResult = await db.collection("project").insertOne(data)
    console.log(dbResult);
     res.status(200).json({"message":"created...!"})

})
 
module.exports = router;