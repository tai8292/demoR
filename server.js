let data = [{
    "id": 1,
    "first_name": "Mayor",
    "last_name": "Orrow",
    "email": "morrow0@behance.net",
    "gender": "Male",
    "city": "Hechuan"
}, {
    "id": 2,
    "first_name": "Suzette",
    "last_name": "Iacobo",
    "email": "siacobo1@ustream.tv",
    "gender": "Female",
    "city": "Pyin Oo Lwin"
}, {
    "id": 3,
    "first_name": "Betti",
    "last_name": "Moncey",
    "email": "bmoncey2@zdnet.com",
    "gender": "Female",
    "city": "Tambakbaya"
}, {
    "id": 4,
    "first_name": "Selina",
    "last_name": "Sarson",
    "email": "ssarson3@illinois.edu",
    "gender": "Female",
    "city": "Jepat Kidul"
}, {
    "id": 5,
    "first_name": "Alyse",
    "last_name": "Scryne",
    "email": "ascryne4@wiley.com",
    "gender": "Female",
    "city": "Sakaidechō"
}, {
    "id": 6,
    "first_name": "Angela",
    "last_name": "Hustler",
    "email": "ahustler5@house.gov",
    "gender": "Female",
    "city": "Znamenskoye"
}, {
    "id": 7,
    "first_name": "Port",
    "last_name": "Broadberry",
    "email": "pbroadberry6@privacy.gov.au",
    "gender": "Male",
    "city": "Grängesberg"
}, {
    "id": 8,
    "first_name": "Fonsie",
    "last_name": "Oleszczak",
    "email": "foleszczak7@stumbleupon.com",
    "gender": "Male",
    "city": "Ji’an"
}, {
    "id": 9,
    "first_name": "Hesther",
    "last_name": "Planke",
    "email": "hplanke8@mit.edu",
    "gender": "Female",
    "city": "Azenha"
}, {
    "id": 10,
    "first_name": "Lexis",
    "last_name": "Hazelby",
    "email": "lhazelby9@skyrock.com",
    "gender": "Female",
    "city": "Taoling"
}];


var express = require("express");
var app = express();

var express = require('express');
// Import the library:
var cors = require('cors');

var app = express();

// Then use it before your routes are set up:
app.use(cors());

app.get("/url", (req, res, next) => {
    res.json(data);
});

app.get("/url/:id", (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    res.json(data[id-1]);
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
}); 