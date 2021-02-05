const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

app.get('/', (req,res)=>{
    res.send('hello world')
})

//SIGNUP NEW USER
app.post('/users', async(req,res)=>{
    try {
        const {first,last,email,password} = req.body
        console.log(first)
        const newUser = await pool.query("INSERT INTO users (email, password, firstName, lastName) VALUES($1, $2, $3, $4) RETURNING *", 
        [email, password, first, last])
    } catch (error) {
        console.log(error)
    }
})

//CHECK IF USER EMAIL EXISTS IN DB
app.get('/users', async(req,res)=>{
    try {
        const user = req.query.email
        const checkUser = await pool.query("SELECT email FROM users WHERE EXISTS (SELECT email FROM users WHERE users.email = $1)",[user])
        console.log(checkUser)
        res.json(checkUser)
    } catch (error) {
        console.log(error)
    }
})

//FIND USER DETAILS BY EMAIL
app.get('/users/details', async(req,res) => {
    const user = req.query.email
    const userDetails = await pool.query('SELECT * FROM users WHERE email = $1', [user])
    console.log(userDetails)
    res.json(userDetails)
})

// Port
app.listen(5000, () => {
    console.log('Server has started on port 5000')
});