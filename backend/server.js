const express = require('express')
const routes = require('./routes')
const cors = require('cors')


const PORT = 8080
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use( '/', routes )

app.listen(PORT, err => {
    try {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    } catch {
        console.log(err);
    }
})