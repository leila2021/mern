const loger=(req,res,next)=>{  
    console.table({ method:req.method,path:req.url })
    next();
};
module.exports=loger