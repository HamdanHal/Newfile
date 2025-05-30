import express from 'express'
import mongoose from 'mongoose';
const app = express();
const PORT=3000
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.lypds6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get('/',(req, res) => {
    res.send("Baytftgckend Running. WHy NoT WaLkinG!!!")
})

app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}`)
})
mongoose.connect(MONGO_URI)
.then(() => {console.log("Mongo URI connected")})   
.catch(() =>console.log("DB connection error"))
const UserScheme =new mongoose.Schema({
    name:String,
    email:String,
})

const user = mongoose.model('User',UserScheme);

app.post('/users', async (req, res)=> {
    try{
        const newUser = new user(req, res);
        await newUser.save();
        res.status(201).send("User created")
    }
    catch(err){
        res.status(400).send("Error: "+err);
        }
        })
