const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt')


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
        // const salt = await bcrypt.genSalt()
        const {first,last,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log( hashedPassword)
        const newUser = await pool.query("INSERT INTO users (email, password, firstName, lastName) VALUES($1, $2, $3, $4) RETURNING *", 
        [email, hashedPassword, first, last])
        res.json(newUser)
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
    const {email, password} = req.query
    console.log(email, password)
    const userDetails = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    if(userDetails.rows.length > 0){
        const hashedPassword = userDetails.rows[0].password
        if(await bcrypt.compare(password, hashedPassword)){
            const user = {
                first:userDetails.rows[0].firstname,
                last:userDetails.rows[0].lastname,
                id:userDetails.rows[0].id
            }
            res.status(201).send(user)
            // res.send(true, first)
        } else {
            res.send('false')
        }
    } else {
        res.send('false')
    }
    
    console.log(userDetails.rows[0].password)
    // res.json(userDetails)
})

app.post('/users/library/:id', async(req,res) => {
    const {id, title} = req.body
    const newLibrary = await pool.query('INSERT INTO playlist (title, user_id) VALUES($1, $2) RETURNING *',
    [title, id])
    res.json(newLibrary)
})

app.get('/users/library/:id', async(req,res) => {
    const {id} = req.query
    const userLibraries = await pool.query('SELECT * FROM playlist WHERE user_id = $1', [id])
    console.log(userLibraries)
    res.json(userLibraries)
})

// Port
app.listen(5000, () => {
    console.log('Server has started on port 5000')
});