import express = require("express")
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import routes from "./routes"

const app = express()

app.use(bodyParser.json())
app.use(routes)

app.listen(3333)
// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
