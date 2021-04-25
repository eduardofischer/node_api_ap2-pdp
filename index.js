const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.port || 8000

app.use(cors)

app.get('/api/grupo', (req, res) => {
    res.json({
        nomes: ['Eduardo Fischer', 'Lucca Milano', 'Rodrigo Bastos'],
        cartoes: ['00290399', '00287683', '00261162']
    })
})

app.listen(port, () => {
    console.log("Servidor escutando na porta", port)
})
