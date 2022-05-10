//server
// npm run devStart

//client
// npm start

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// const url = require('url'); // for usuall url (blocked by browser by default)

const songs = require('./data/songs.json');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './data/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage: storage});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    res.send(songs);
});
app.get('/api/get/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let song = {};
    for (let index = 0; index < songs.length; index++) {
        if (songs[index].id === id) {
            song = songs[index];
        }
    }
    res.send(song);
});
app.get('/api/get/info/length', (req, res) => {
    res.send(songs.length.toString());
});

app.post("/api/upload", upload.single("filedata"), (req, res)=> {
    const filedata = req.file;

    const songTitle = req.body.songTitle;
    const songAuthor = req.body.songAuthor;
    const songAuthorImg = req.body.songAuthorImg;
    const songAlbumImg = req.body.songAlbumImg;

    const newSong = {
        "name": songTitle,
        "author": songAuthor,
        "url": `http://127.0.0.1:8080/${filedata.filename}`, // for "npm i -g http-server" -> folder -> "http-server ./"
        // "url": url.pathToFileURL(filedata.path); // for usuall url (blocked by browser by default)
        "id": songs[songs.length-1].id + 1,
        "links": {
            "images": [
                {
                    "url": songAuthorImg
                },
                {
                    "url": songAlbumImg
                }
            ]
        }
    }
    songs.push(newSong);
    fs.writeFileSync("./data/songs.json", JSON.stringify(songs));
    res.send("File was uploaded succesfully! You can now return back to the main page.");
});

app.listen(3001, () => {
    console.log('running on 3001');
});