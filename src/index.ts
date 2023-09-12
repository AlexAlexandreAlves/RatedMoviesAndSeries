import express = require("express")
import { AppDataSource } from "./data-source"
import routes from "./routes/routes"


AppDataSource.initialize().then(async () => {

    const app = express()

    app.use(express.json())

    app.use(routes)

    return app.listen(3333)

}).catch(error => console.log(error))
