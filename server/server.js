const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES
app.get('/users', async(req,res)=>{
    try {
        const users = await pool.query("SELECT * FROM users")
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

// Port
app.listen(5000, () => {
    console.log('Server has started on port 5000')
});