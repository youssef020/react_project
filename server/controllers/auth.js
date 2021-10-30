
import { hashPassword,comparePassword } from '../helpers/auth';
import User from '../models/user'
import jwt from 'jsonwebtoken'
import { urlencoded } from 'express';
export const register = async (req,res)=> {
    const {name ,email,password,secret}=req.body;

    //validation

    if(!name) return res.status(400).send("name is required");
    if(!password || password.length <6)
    return res.status(400)
    .send("password is required should be 6 characters long");

    if(!secret) return res.status(400).send('answer is required');
    const exist = await User.findOne({email})
    if(exist) return res.status(400).send('email already exist') ;

    //hash password

    const hashedPassword = await hashPassword(password);

    const user = new User ({
        name,
        email,
        password: hashedPassword,
        secret
    });


    try{
        console.log('user before save', user)
            await user.save() ;
            console.log('register success',user)
            return res.json({
                ok:true
            })
    }catch(err){
        console.log('register failed',err)
        return res.status(400).send('error try again')
    }
}

export const login = async(req,res)=>{
    console.log(req.body);
    try {
        const {email,password}= req.body;
        //check if our db has user with that mail
        const user = await User.findOne({email});
        if(!user) return res.status(400).send("no user found");
        //check password
        const match = await comparePassword(password,user.password)
        if (!match) return res.status(400).send('wrong password');
        //create token
        const token = jwt.sign({
            _id: user.id
        },process.env.JWT_SECRET,{"expiresIn": "7d" })
        user.password=undefined;
        user.secret=undefined;
        res.json({
            token,
            user
        })



    }catch(err){
        console.log(err)
        return res.status(400).send("error. try again")
    }

}

export const currentUser = async (req,res) => {
    console.log(req.headers);
    try{
        const user = await User.findById(req.user._id);
        res.json(user)
        res.json({
            ok:true
        })
    }catch (err){
        console.log(err);
        res.sendStatus(400)
    }
}