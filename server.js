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

    const tabela = supabase.from('confirmados')

    try {
        await tabela.upsert({ name });
        return res.status(201).send('Presença confirmada com sucesso!');
    } catch (error) {
        return res.status(500).send('Ocorreu um erro. Tente novamente.');
    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
