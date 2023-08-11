import { Router, query } from "express";
import { client, connect } from "./conn.js";
import { ObjectId } from "mongodb";
//express router for users
const users = Router();

//connect to database
connect();

//---------------------USER ROUTES------------------//

//---------------------USER GETALL------------------//
users.get("/", async (req, res) => {

    //get collection
    const collection = await client.db("notes_app").collection("users");

    //find all the methods
    const data = await collection.find({}).toArray();

    //response
    res.json(data);
})

//---------------------USER GETBYID------------------//
users.get("/:id", async (req, res) => {

    const query = {

        _id: new ObjectId(req.params.id)

    }

    //get collection
    const collection = await client.db("notes_app").collection("users");

    //find all the methods
    const data = await collection.findOne(query);
    //response
    res.json(data);
})


//---------------------USER POST------------------//
users.post("/", async (req, res) => {
    const body_data = req.body;

    //get collection
    const collection = await client.db("notes_app").collection("users");

    //post operation
    const data = await collection.insertOne(body_data);

    res.send("inserted successfully");

})

//---------------------USER PUT------------------//
users.put("/:id", async (req, res) => {
    const body_data = req.body;

    const query = {
        _id: new ObjectId(req.params.id)
    }

    const update = {
        $set: body_data
    }

    const collection = await client.db("notes_app").collection("users");

    const data = await collection.updateOne(query, update)

    res.send(`${req.params.id} is updated`)
})



//---------------------USER DELETE-----------------//
users.delete("/:id", async (req, res) => {

    const query = {
        _id: new ObjectId(req.params.id)
    }
    const collection = await client.db("notes_app").collection("users");

    const data = await collection.deleteOne(query);

    res.send(`${req.params.id} is deleted`)

})




export default users;
