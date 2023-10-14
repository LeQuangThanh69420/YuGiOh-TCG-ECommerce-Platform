--IDENTITY(1,1)
--PRIMARY KEY
--FOREIGN KEY REFERENCES Table(TableAtribute)
--USE database
DROP DATABASE TCG;

CREATE DATABASE TCG;

USE TCG;

CREATE TABLE CardType (
    CardTypeName nvarchar(50) PRIMARY KEY,
);

CREATE TABLE CardOrigin (
    CardOriginName nvarchar(50) PRIMARY KEY,
);

CREATE TABLE CardElement (
    CardElementName nvarchar(50) PRIMARY KEY,
);

CREATE TABLE CardRarity (
    CardRarityName nvarchar(50) PRIMARY KEY,
);
CREATE TABLE Card (
    CardId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
    CardName nvarchar(100) NOT NULL UNIQUE,
    CardImageURL nvarchar(255) NOT NULL UNIQUE,
    CardTypeName nvarchar(50) NOT NULL FOREIGN KEY REFERENCES CardType(CardTypeName),
    CardOriginName nvarchar(50) FOREIGN KEY REFERENCES CardOrigin(CardOriginName),
    CardElementName nvarchar(50) FOREIGN KEY REFERENCES CardElement(CardElementName),
    CardRarityName nvarchar(50) NOT NULL FOREIGN KEY REFERENCES CardRarity(CardRarityName),
);