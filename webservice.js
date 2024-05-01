import express from "express";
import bodyParser from "body-parser";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));


//webservice methods.


//Handling post Request.
app.post('/usrs', (request, response) => {
    //stores users.

    insert1(request);
    
    // sends a reponse.
    response.send({"name":"Data recieved"});
});

//Handling get request.

// gets the userArray.
app.get("/usrs", async (request, response) => {
    const userArray = await find();
    console.log(userArray);
    response.send(JSON.stringify(userArray));
});

//gets specific users.
app.get("/usrs/search", async (request, response) => {
    if(request.query.User_name === undefined){
        response.send({"error": "Missing 'User_name' and 'Password' query parameter."});
    }
    else{
        const usrsFound = [];
        const userArray = await find();

        for(let tmpUsr of userArray){
            if(tmpUsr.User_name === request.query.User_name)
                usrsFound.push(tmpUsr);
        }
        console.log(usrsFound);
        response.send(JSON.stringify(usrsFound));
    }
});

//express listenin to port:8080
app.listen(8080);
console.log("Express is listening on port 8080.");

//Setting up connecting to MongoDB.
const connection = "mongodb://127.0.0.1:27017/";

//creating an an object with the 
const client = new MongoClient(connection, {
    serverApi: {
        version:ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    }
});

//creating a dtabase and collection object
const DB = client.db("CourseWork2");

const collection = DB.collection("Users");

//find functions
async function find(){
    const query = {};
    
    const results = await collection.find(query).toArray();
    console.log(results);

    await client.close();
    return results;
}


async function findSort(SortOpt,search){
    const query = {$text : {$search : search }};
    
    const sortOptions = {
        sort: {User_name: SortOpt}
    }

    const results = await collection.find(query, sortOptions).toArray();
    console.log(results);

    await client.close();
}

//insert funstions
async function insert1(request){
    const newUser = request.body;
    
    const results = await collection.insertOne(newUser);
    console.log(results);

    await client.close();
}

async function insertMulti(){
    const newUserArray = [
        {Name: "Derek Rose1", User_name: "DRose1", Password: "FUDROSE1"},
        {Name: "Derek Rose2", User_name: "DRose2", Password: "FUDROSE2"}
    ];
    
    const results = await collection.insertMany(newUserArray);
    console.log(results);
 
    await client.close();
}

// update functions.
async function replace1(){
    const query = {_id: new ObjectId('6617d63b23fe04db7f1761e9')};
    
    const newdetails = {Name: "Derek 0", User_name: "D0", Password: "FUD0"};
    try{
        const results = await collection.replaceOne(query, newdetails);
        console.log(results);
    
        await client.close();
    }
    catch(err){
        console.error(`Failed to replace document: ${err}`);
    }

    await client.close();
}

//update functions
async function update1(){
    const query = {Name: "Derek 0"};
    const updateDetails = {$set: { User_name: "DRose0", Password: "DaChamp"}};
    const results = await collection.updateOne(query, updateDetails);
    console.log(`Updated ${results.modifiedCount} document(s)`);

    await client.close();
}

async function updateMulti(){
    const query = {Name: "Derek 0"};
    const updateDetails = {$set: { User_name: "DRoseprime"}};
    const results = await collection.updateMany(query, updateDetails);
    console.log(`Updated ${results.modifiedCount} document(s)`);

    await client.close();
}


// delete functions
async function delete1(){
    const query = {Name: "Derek 0"};
    const results = await collection.deleteOne(query);
    console.log(`${results.deletedCount} documents deleted`);

    await client.close();
}

async function deletemulti(){
    const query = {Name: "James Harden"};
    const results = await collection.deleteMany(query);
    console.log(`${results.deletedCount} documents deleted`);

    await client.close();
}

