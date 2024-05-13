CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    likes INTEGER DEFAULT 0
);

SELECT * FROM blogs;

INSERT INTO blogs (author, url, title, likes) VALUES ('tej','http//tej.com','post', 0);

DELETE FROM blogs WHERE id = 5;
