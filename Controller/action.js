const mongoClient = require("../Database/connection");

const bollywood = async (req, res) => {
    try {
        const result = await mongoClient.bollywood();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const hollywood = async (req, res) => {
    try {
        const result = await mongoClient.hollywood();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const technology = async (req, res) => {
    try {
        const result = await mongoClient.technology();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const fitness = async (req, res) => {
    try {
        const result = await mongoClient.fitness();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
const food = async (req, res) => {
    try {
        const result = await mongoClient.food();
        console.log("The result of databse operation =>", result);
        return res.status(200).send(result);
    } catch(error) {
        console.log("Something went wrong while performing database opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

module.exports = {bollywood, hollywood, technology, fitness, food}