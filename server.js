import { config } from 'dotenv';

config();

import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/confirm', (req, res) => {
    const name = req.body.name;

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
