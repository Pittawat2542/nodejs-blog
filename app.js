const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');

const Post = require('./models/post-model');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    const posts = Post.getAllPosts();
    response.render('index', {
        posts: posts
    });
});

app.listen(3000, () => {
    console.log('Server is started at http://localhost:3000')
});