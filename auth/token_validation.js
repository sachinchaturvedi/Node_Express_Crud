const{ verify } = require("jsonwebtoken");


module.exports = {
    checkToken: (req,res,next) => {
        //let token = req.get("authorization");
        let token = req.header('Authorization');
        if(token){
            //token =token.slice(7);
            verify(token, "aits@123",(err,decoded) => {
                if(err){
                    res.json({
                        success : 0,
                        message : "Invalid token"
                    });
                }else{
                    next();
                }

            });
        }else{
            res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
}