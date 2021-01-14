// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require("child_process");


const port = 8080;
const app = express();
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
 
app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'}
    );
});

app.post('/check-cost',(req,res)=>{
    const rawData = req.body;
    const billingCondition = JSON.parse(JSON.stringify(rawData));
         // check requirement
    if(!!billingCondition){
        console.log(billingCondition);
        exec(`aws organizations invite-account-to-organization --target '{"Type": "ACCOUNT", "Id": "${billingCondition.info.Account}"}'`
        ,(error, data, getter) => {
            if(error){
                console.log("error",error.message);
                return;
            }
            if(getter){
                console.log("data",data);
                return;
            }
            console.log("data",data);
        })
        // invite acount to join
        res.end();
    } else{
        console.log("Doesn't meet requirement!")
    }

})

 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});