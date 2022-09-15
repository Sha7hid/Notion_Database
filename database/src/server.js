const express = require('express');
const {Client} = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());

const PORT = 9000;
const HOST = "localhost";

const client = new Client({auth:"secret_5rNlMs8xTfgEBjeofc2diulOtltqQEAERtdS2ulLBhj"})

const databaseid = "acb54fb7be574aa38d5377635551354a";

app.post('/submitFormToNotion',jsonParser, async(req,res)=>{
const name = req.body.name;
const phoneNumber= req.body.phoneNumber;
const extraInfo = req.body.extraInfo;
try{
const response = await Notification.pages.create({
    parent : {databaseid: databaseid},
    properties:{
        Name : {
            title:[
                {
                    text:{
                        content: name
                    }
                }
            ]
        },
        "Phone Number" : {
            rich_text:[
                {
                    text:{
                        content: phoneNumber
                    }
                }
            ]
        },
        "Extra Information" : {
            rich_text:[
                {
                    text:{
                        content: extraInfo
                    }
                }
            ]
        }
    }
})
console.log(response);
console.log("SUCCESS !")
} catch(error){
    console.log(error);
}
});
app.listen(PORT, HOST,  ()=> {
console.log("starting proxy at "+ HOST + "!" + PORT);
})