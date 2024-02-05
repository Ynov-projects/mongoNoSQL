const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// const User = mongoose.model('User', new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })
// );

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/express/index.html');
});

app.post('/post', function (req, res) {
    let p1 = req.body.p1;
    res.send(
        `message: ${p1}`
    );
});

app.post('/api/users', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
     
    });
    user.save()
        .then(() => res.send(user))
        .catch(err => res.status(400).send(err.message));
}
);


app.listen(3001, () => console.log('Server is running on port 3001'));

