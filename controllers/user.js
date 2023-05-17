import user from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerform = (req, res) => {
    res.render('authentication/register');
};

export const register = async (req, res) => {
    const { username, email, password, academic_id } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var encrptedpassword = bcrypt.hashSync(password, salt);
    await user.create({ username, email, password: encrptedpassword, academic_id });
    res.redirect('/login');
};

export const loginform = (req, res) => {
    res.render('authentication/login');
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const loggeduser = await user.findOne({ email });
    const iscorrectpassword = bcrypt.compareSync(password, loggeduser.password);
    if (!iscorrectpassword) {
        return res.send('Incorrect passwword');
    }; 

    const data ={
        _id:loggeduser._id,
        email:loggeduser.email,
    };
    const jwttoken = jwt.sign(data , process.env.jwt_secret);
    res.cookie('token' , jwttoken);

    res.send('logged in');
};
