import {encriptar} from './encriptacion';
const express = require('express');
const mysql=require("mysql");
const iprequest=require("request-ip");
const app=express();
//cors
const cors=require('cors');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'LaWeb'
});

connection.connect(function(err:any) {
    if (err) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

app.get("/",jsonParser,(req:any, res:any) => {
    let email=req.body.email;
    let password=req.body.password;
    
    connection.query("select * from usuarios where email=? and password=?",[email,password],function(error:any,results:any,fields:any){
        if (error) throw error;
       
            if(results[0].activo==1){
                

            }
        
        res.send(JSON.stringify({"mensaje":true,"resultado":results}));
    });
    
});




const configuracion={
    hostname: "127.0.0.1",
    port: 5001,
}

app.listen(configuracion, () => {
    console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})