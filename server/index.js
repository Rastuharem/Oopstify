const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const songs = require('./data/songs.json');
const app = express();
const upload = multer({dest:"./data/uploads"});

function addNewSongToJSON() {
    console.log('added');
}

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    res.send(songs);
});

app.post("/api/upload", upload.single("filedata"), (req, res)=> {
    const songTitle = req.body.songTitle;
    const songAuthor = req.body.songAuthor;
    const songAuthorImg = req.body.songAuthorImg;
    const songAlbumImg = req.body.songAlbumImg;
    const filedata = req.file;
    console.log(filedata);
    addNewSongToJSON();
    res.send("Файл успешно отправлен!");
});

app.listen(3001, () => {
    console.log('running on 3001');
});