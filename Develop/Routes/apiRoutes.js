app.get('/api/notes', (req, res)=>{
    //should read json file and return all saved notes
res.json({ //sends json response
    title:"Test Title",
    text:"Test text"
})
})


app.post('/api/notes', (req, res)=>{
    //should receive a new note to save on the request body,
    //add it to the db.json file and return the new note to client.
    //give each new note an id

})