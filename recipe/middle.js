const check =  (req,res,next)=>{
    console.log(req.body)
    let {name,description,preparationTime,cookingTime,imageUrl,country,veg}=req.body;
    if(name && description && preparationTime && cookingTime && imageUrl && country && veg){
        next()
    }
    else{
        return res.status(200).send({error:"all fields are required", reference:"initialrecipe"});
    }
}

module.exports = check