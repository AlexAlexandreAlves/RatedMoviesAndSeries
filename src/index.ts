import express = require("express")
import { AppDataSource } from "./data-source"
import movies from "./routes/movies.routes"
import tvShow from "./routes/tvshows.routes"
import user from "./routes/user.routes"
import ratedMovies from "./routes/ratedMovies.routes"
import ratedTvShow from "./routes/ratedTvShow.routes"


AppDataSource.initialize().then(async () => {

    const app = express()
    const swaggerUi = require('swagger-ui-express')
    const swaggerFile = require('../swagger.json')

    app.use(express.json())

    app.use(movies)
    app.use(tvShow)
    app.use(user)
    app.use(ratedMovies)
    app.use(ratedTvShow)
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

    return app.listen(3333)

}).catch(error => console.log(error))
