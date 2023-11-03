--IDENTITY(1,1)
--PRIMARY KEY
--FOREIGN KEY REFERENCES Table(TableAtribute)
--USE database
DROP DATABASE TCG;

CREATE DATABASE TCG;

USE TCG;

CREATE TABLE "User" (
    UserId bigint IDENTITY(1,1) PRIMARY KEY,
    Username varchar(20) NOT NULL UNIQUE,
    Password varchar(10) NOT NULL,
    Email varchar(50) NOT NULL UNIQUE,
    Money int NOT NULL,
    Actived bit NOT NULL,
    ActiveCode int,
);--AvatarUrl nvarchar(180),

CREATE TABLE CardType (
    CardTypeName nvarchar(10) PRIMARY KEY,
);

CREATE TABLE CardOrigin (
    CardOriginName nvarchar(20) PRIMARY KEY,
);

CREATE TABLE CardElement (
    CardElementName nvarchar(10) PRIMARY KEY,
);

CREATE TABLE CardRarity (
    CardRarityName nvarchar(5) PRIMARY KEY,
);

CREATE TABLE Card (
    CardId bigint IDENTITY(1,1) PRIMARY KEY,
    CardName nvarchar(60) NOT NULL UNIQUE,
    CardImageURL nvarchar(180) NOT NULL UNIQUE,
    CardTypeName nvarchar(10) NOT NULL FOREIGN KEY REFERENCES CardType(CardTypeName),
    CardOriginName nvarchar(20) FOREIGN KEY REFERENCES CardOrigin(CardOriginName),
    CardElementName nvarchar(10) FOREIGN KEY REFERENCES CardElement(CardElementName),
    CardRarityName nvarchar(5) NOT NULL FOREIGN KEY REFERENCES CardRarity(CardRarityName),
);

CREATE TABLE UserCard (
    UserCardId bigint IDENTITY(1,1) PRIMARY KEY,
    UserId bigint NOT NULL FOREIGN KEY REFERENCES "User"(UserId),
    CardId bigint NOT NULL FOREIGN KEY REFERENCES Card(CardId),
    OnHold bit NOT NULL,
);

CREATE TABLE Deal (
    DealId bigint IDENTITY(1,1) PRIMARY KEY,
    SellUserId bigint NOT NULL FOREIGN KEY REFERENCES "User"(UserId),
    BuyUserId bigint FOREIGN KEY REFERENCES "User"(UserId),
    CardId bigint foreign key references Card(CardId) NOT NULL,
    Price int NOT NULL,
);

drop table deal

--Todo:
--Comment
--Event
--Gacha