const express = require('express');
const consultationsRouter = require('./routes/consultations');

const app = express();

app.use(express.json());
app.use('/api', consultationsRouter);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
