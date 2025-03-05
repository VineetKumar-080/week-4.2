const express = require("express")

const app = express();

// Here we are creating a function (checker) which help us to identify the age of the person who want to ride the ride.

// It will return a boolean if the age of the person is more than 14.

function isOldEnoughMiddleware(req,res, next){
    const age  = req.query.age;
    if(age >= 14){
        next()
    }else{
        res.json({
            msg: "sorry you are not of age yet"
        })
    }
}

/*
There are basically 2 ways to introduce middlewares. 
1. seprately in the routes
2. just above the routes using app.user(isoldenoughMiddleware). And it'll automatically placed on the below routes
*/


// app.use(isOldEnoughMiddleware)


// Ride - 1 
app.get("/ride1",isOldEnoughMiddleware,function(req,res){
        res.status(411).json({
            msg: "You have successfully riden the ride - 1"
        })
    })

    
// Ride - 2   
app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    res.status(411).json({
        msg: "You have successfully riden the ride - 2"
        })
    });
app.listen(3000);