--USE database
DROP DATABASE TCG;

CREATE DATABASE TCG;

USE TCG;

--example
CREATE TABLE Post (
    PostId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    PostContent nvarchar(300) NOT NULL,
    Description nvarchar(100),
);

CREATE TABLE Comment (
    CommentId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CommentContent nvarchar(100) NOT NULL,
    PostId bigint NOT NULL FOREIGN KEY REFERENCES Post(PostId),
);

INSERT INTO Post (PostContent, Description) VALUES ('day la con tent', 'day la mo ta');
INSERT INTO Post (PostContent, Description) VALUES ('day la con tent2', NULL);

INSERT INTO Comment (CommentContent, PostId) VALUES ('day la CommentContent', 1);
INSERT INTO Comment (CommentContent, PostId) VALUES ('day la CommentContent2', 1);
INSERT INTO Comment (CommentContent, PostId) VALUES ('day la CommentContent2', 1);
INSERT INTO Comment (CommentContent, PostId) VALUES ('day la CommentContent2', 2);
INSERT INTO Comment (CommentContent, PostId) VALUES ('day la CommentContent2', 2);
INSERT INTO Comment (CommentContent, PostId) VALUES ('day la CommentContent2', 2);
--example
