module.exports = [
    { "id": "tt0110357", "name": "The Lion King", "genre": "animation"},
    { "id": "tt0068646", "name": "The Godfather", "genre": "crime"},
    { "id": "tt0468569", "name": "The Dark Knight", "genre": "action"},
];

// server.js
let data = require('./data');

//GET all items
server.get("/items", (req, res) => {
    res.json(data);
 });
//Get one item identified by :id - GET /items/:id 

server.get("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.find(_item => _item.id === itemId);
 
    if (item) {
       res.json(item);
    } else {
       res.json({ message: `item ${itemId} doesn't exist`})
    }
 });

 // server.js

const body_parser = require('body-parser');

// parse JSON (application/json content-type)
server.use(body_parser.json());

// server.js

server.post("/items", (req, res) => {
   const item = req.body;
   console.log('Adding new item: ', item);

   // add new item to array
   data.push(item)

   // return updated list
   res.json(data);
});

// update an item
server.put("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const item = req.body;
    console.log("Editing item: ", itemId, " to be ", item);
 
    const updatedListItems = [];
    // loop through list to find and replace one item
    data.forEach(oldItem => {
       if (oldItem.id === itemId) {
          updatedListItems.push(item);
       } else {
          updatedListItems.push(oldItem);
       }
    });
 
    // replace old list with new one
    data = updatedListItems;
 
    res.json(data);
 });

 // delete item from list
server.delete("/items/:id", (req, res) => {
   const itemId = req.params.id;

   console.log("Delete item with id: ", itemId);

   // filter list copy, by excluding item to delete
   const filtered_list = data.filter(item => item.id !== itemId);

   // replace old list with new one
   data = filtered_list;

   res.json(data);
});
