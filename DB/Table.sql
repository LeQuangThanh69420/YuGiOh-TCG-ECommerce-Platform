--IDENTITY(1,1)
--PRIMARY KEY
--FOREIGN KEY REFERENCES Table(TableAtribute)
--USE database
DROP DATABASE TCG;

CREATE DATABASE TCG;

USE TCG;

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
    CardImageURL nvarchar(120) NOT NULL UNIQUE,
    CardTypeName nvarchar(10) NOT NULL FOREIGN KEY REFERENCES CardType(CardTypeName),
    CardOriginName nvarchar(20) FOREIGN KEY REFERENCES CardOrigin(CardOriginName),
    CardElementName nvarchar(10) FOREIGN KEY REFERENCES CardElement(CardElementName),
    CardRarityName nvarchar(5) NOT NULL FOREIGN KEY REFERENCES CardRarity(CardRarityName),
);