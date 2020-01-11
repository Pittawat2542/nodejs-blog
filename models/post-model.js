class Post {
    constructor(id, title, body, author, createdDate) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
        this.createdDate = createdDate;
    }

    static getAllPosts() {
        const DUMMY_POSTS = [
            new Post(
                1,
                'This is a very good post',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Bob',
                new Date()
            ),
            new Post(
                2,
                'This is a very bad post',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Bob',
                new Date()
            )
        ];
        return [...DUMMY_POSTS];
    }
}

module.exports = Post;
