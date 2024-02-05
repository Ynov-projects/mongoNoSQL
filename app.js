const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors());

const mongoose = require('mongoose');
const uri = env.process.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
    password: String
})
);

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

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


app.listen(3001, () => console.log('Server is running on port 3000'));

