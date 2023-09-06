import express = require("express")
import { AppDataSource } from "./data-source"


AppDataSource.initialize().then(async () => {

    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
        return res.json("Application online!")
    })

    return app.listen(3333)

}).catch(error => console.log(error))
