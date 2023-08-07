import { Router, query } from "express";
import { client, connect } from "./conn.js";
import { ObjectId } from "mongodb";
//express router for notes
const notes = Router();

//connect to database
connect();

//---------------------USER ROUTES------------------//

//---------------------USER GETALL------------------//
notes.get("/", async (req, res) => {

    //get collection
    const collection = await client.db("notes_app").collection("notes");

    //find all the methods
    const data = await collection.find({}).toArray();

    //response
    res.send(data);
})

//---------------------USER GETBYID------------------//
notes.get("/:id", async (req, res) => {

    const query = {

        _id: new ObjectId(req.params.id)

    }

    //get collection
    const collection = await client.db("notes_app").collection("notes");

    //find all the methods
    const data = await collection.findOne(query);
    //response
    res.send(data);
})


//---------------------USER POST------------------//
notes.post("/", async (req, res) => {
    const body_data = req.body;

    //get collection
    const collection = await client.db("notes_app").collection("notes");

    //post operation
    const data = await collection.insertOne(body_data);

    res.send("inserted successfully");

})

//---------------------USER PUT------------------//
notes.put("/:id", async (req, res) => {
    const body_data = req.body;

    const query = {
        _id: new ObjectId(req.params.id)
    }

    const update = {
        $set: body_data
    }

    const collection = await client.db("notes_app").collection("notes");

    const data = await collection.updateOne(query, update)

    res.send(`${req.params.id} is updated`)
})



//---------------------USER DELETE-----------------//
notes.delete("/:id", async (req, res) => {

    const query = {
        _id: new ObjectId(req.params.id)
    }
    const collection = await client.db("notes_app").collection("notes");

    const data = await collection.deleteOne(query);

    res.send(`${req.params.id} is deleted`)

})




export default notes;
