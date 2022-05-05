const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const songs = require('./data/songs.json');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    res.send(songs);
});

app.post("/api/upload", (req, res)=> {
    const songTitle = req.body.songTitle;
    const songAuthor = req.body.songAuthor;
    const songAuthorImg = req.body.songAuthorImg;
    const songAlbumImg = req.body.songAlbumImg;
    addNewSongToJSON();
});

app.listen(3001, () => {
    console.log('running on 3001');
});

function addNewSongToJSON() {
    console.log('added');
}