import { config } from 'dotenv';
config();

import { supabase } from './supabase.js';


import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/confirm', async (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    await supabase.from("confirmados").upsert({
        name:name
        
    })
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
