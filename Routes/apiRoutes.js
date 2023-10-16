const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// include/require in your db.json file (/db/db.json)
const noteEntries = require('../db/db.json');

router.get('/notes', (req,res) => {
    const dirPath = '/Users/crislyn/bootcamp/miniature-eureka/db/db.json'
   const apiNotes = JSON.parse(fs.readFileSync(dirPath, 'utf8'))
console.log("apiNotes working!!")
    res.json(apiNotes);
});

router.post('/notes', (req, res) => {
    console.log("post  works!!");
    const allNotes = req.body;
    const dirPath = '/Users/crislyn/bootcamp/miniature-eureka/db/db.json'
const myNotes = JSON.parse(fs.readFileSync(dirPath, 'utf8')) //do in get then read it
console.log(allNotes);

    //should receive a new note to save on the request body,
    //add it to the db.json file and return the new note to client.
 //gives each new note an id


myNotes.push(allNotes);

fs.writeFileSync(dirPath, JSON.stringify(myNotes));
    res.json(myNotes);
});


//  router.delete('/api/notes/:id', (req, res) => {
// console.log("Delete a note works!")
//  })
module.exports = router;