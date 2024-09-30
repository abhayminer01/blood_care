const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = new knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'blood_care',
    },
});


app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        console.log(email,password);
        const  user = await db('user_creds').where({ email }).first();
        
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        };
        console.log(user.email, user.password);

        if(email === user.email && password === user.password){
            res.json({
                success : true,
                id : user.id,
                name : user.name,
                email : user.email
            });
        }else {
            res.json({
                success : false
            });
        };
    } catch(error){
        console.log(error);
    };
});

app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const user = await db('user_creds').where({ email }).first();
        if(user){
            res.json({ success : false });
        }else{
            
            const insert = await db('user_creds').insert({ name : name, email : email, password : password });
            
            if (!insert) {
                return res.status(400).json({ success : false, message: 'Error occured while inserting data' });
            };

            const  user = await db('user_creds').where({ email }).first();
            res.json({ success : true, id : user.id });
        };     
    } catch(err){
        console.log(err);
    };
});


app.post('/api/get-profile', async (req, res) => {
    const { id }= req.body;
    try{
        const data = await db('user_creds').select('name', 'email', 'password', 'permission').where({ id }).first();

        if (!data) {
            return res.status(400).json({ message: 'User not found' });
        };

        res.json({ name : data.name, email : data.email, password : data.password, permission : data.permission });
        
    } catch(err){
        console.log(err);
    };
});


app.post('/api/blood-request', async (req, res) => {
    const { userId, group, amount, urgency, purpose, location } = req.body;
    try {
        const insert = await db('blood_request').insert({ user_id : userId, blood_group : group, amount : amount, urgency : urgency, location : location });
        
        if (!insert) {
            return res.status(400).json({ success : false });
        };

        res.json({
            success : true
        });

    } catch (error) {
        console.log(error);
    };
});


app.post('/api/donor-reg', async (req, res) => {
    const { userId, blood_group, weight } = req.body;

    try {
      const insert = await db('donors').insert({ user_id : userId, blood_group : blood_group, body_weight : weight });
      
      if (!insert) {
        return res.status(400).json({ success : false });
      };

      res.json({ success : true });

    } catch (error) {
        console.log(error);
    };
});

app.get('/api/get-inventory', async (req, res) => {
    try {
        const select = await db.select('*').from('blood_inventory');
        res.json(select);
    } catch(error){
        console.log(error);
    };
});

app.get('/api/get-requests', async (req, res) => {
    try {
        const select = await db.select('*').from('blood_request');
        res.json(select);
    } catch(error){
        console.log(error);
    };
});


app.listen(port, ()=>{
    console.log(`Connected to port ${port}`);
});