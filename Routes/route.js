const route=require("express").Router()

const controller = require("../Controller/action");

route.get("/bollywood",controller.bollywood)
route.get("/hollywood",controller.hollywood)
route.get("/technology",controller.technology)
route.get("/fitness",controller.fitness)
route.get("/food",controller.food)

module.exports=route;