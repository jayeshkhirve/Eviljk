var express=require('express');

var app=express();

const PORT = process.env.PORT || 3000

var i=0,top=0,down=0,temp=0;

app.get('/send',function(req,res)
	{
	    top=req.query.top;
		
	    res.write("success");
	    res.end();
	});

app.get('/get',function(req,res)
	{
		 res.header("Access-Control-Allow-Origin", "*"); 
		 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		 
	      res.write(""+top);
	  	  res.end();
	  	    
		  top=0;
		
	});

app.listen(PORT);

