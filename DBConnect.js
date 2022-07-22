    const express = require('express');
    const sql = require('mssql');
    const PORT = 3002;
    
    const app = express();
    
    const sqlConfig = {
      server: 'tcp:firstclosedbdev.database.windows.net,',
      user: 'DBMasterDev',
      password: 'April@123',         
      port: 1433,
      database: 'FirstcloseDev',
      options: {
        encrypt: false,
    },
    };
    
    app.get('/',function(req,res){
        let connection = sql.connect(sqlConfig,(err)=>{
            if(err){
                console.log(err)
            }else {
                res.send('DB Connected');
                //code for sql request here.
            }
    
        })
    })
    
    app.listen(PORT,function(){
        console.log(`Server started at ${PORT}`)
    })