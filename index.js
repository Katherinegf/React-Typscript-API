const port = process.env.PORT || 5000 /* om du ej hittar evoirment port så använd port 5000 */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

//middleware
app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(bodyParser.json())

const productsController = require('./controllers/productsController') /*nu finns det en controller som svarar på denna adressen */
const contactController = require('./controllers/contactController')
const { connectToServer } = require('./server/db/conn')
app.use('/api/products', productsController)
app.use('/api/contact', contactController)

connectToServer((err) => {
    if(!err) {
        console.log("Connected to server")
        app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`))
    } else {
        console.log("Failed to connect")
    }


    
})

