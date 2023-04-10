const route=require("express").Router()
const data=require('../dummydata/data')
route.get("/bollywood",data.bollywood)
route.get("/hollywood",data.hollywood)
route.get("/technology",data.technology)
route.get("/fitness",data.fitness)
route.get("/food",data.food)
module.exports=route;