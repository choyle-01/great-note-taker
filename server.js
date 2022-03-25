const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  readFileAsync("./db/db.json", "utf-8").then(function(data) {
    note = [].concat(JSON.parse(data))
    res.json(note);
  })
});

app.post("/api/notes", (req, res) => {
  const postingNotes = req.body;
  readFileAsync("./db/db.json", "utf-8").then(function(data) {
    const addingNotes = [].concat(JSON.parse(data));
    postingNotes.id = addingNotes.length + 1 
    addingNotes.push(postingNotes);
    return addingNotes;
  }).then(function(addingNotes) {
    writeFileAsync("./db/db.json", JSON.stringify(addingNotes))
    res.json(postingNotes);
  })
});

app.delete("/api/notes/:id", function(req, res) {
  const toDelete = parseInt(req.params.id);
  readFileAsync("./db/db.json", "utf-8").then(function(data) {
    const notes = [].concat(JSON.parse(data));
    const newNotes = []
    for (let i = 0; i < notes.length; i++) {
      if (toDelete !== notes[i].id) {
        newNotes.push(notes[i])
      }
    }
    return newNotes
  }).then(function(notes) {
    writeFileAsync("./db/db.json", JSON.stringify(notes))
    res.send("Note Saved!");
  })
})

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
