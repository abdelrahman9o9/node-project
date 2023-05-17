import jwt from "jsonwebtoken";


export const authentication =(req ,res ,next) =>{
    const {token} = req.cookies;
    try{
    const decoded = jwt.verify(token , process.env.jwt_secret);
    req.user = decoded ;
    next();
    }catch(error) {
     return res.redirect('/login');
    }; 
};