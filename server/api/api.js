import express from 'express';
import { register } from './register.js';
import { login } from './login.js'


export const api = express.Router();

api.all('/', (req, res) => {
    return res.json({
        msg: 'Incomplete URL',
    });
});

api.use('/login', login);
api.use('/register', register);
