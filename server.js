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

    supabase.from('confirmados').insert([{ name }]).then(({ data, error }) => {
        if (error) {
            console.error(error);
            res.status(500).send('Ocorreu um erro ao confirmar a presença.');
        } else {
            res.status(200).send('Presença confirmada com sucesso!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
