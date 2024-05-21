const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/confirm', (req, res) => {
    const name = req.body.name;
    if (name) {
        fs.appendFile('confirmations.txt', `${name}\n`, err => {
            if (err) {
                res.status(500).send('Erro ao salvar confirmação');
            } else {
                res.status(200).send('Confirmação recebida');
            }
        });
    } else {
        res.status(400).send('Nome é obrigatório');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
