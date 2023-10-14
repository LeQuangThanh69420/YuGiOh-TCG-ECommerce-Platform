--IDENTITY(1,1)
--PRIMARY KEY
--FOREIGN KEY REFERENCES Table(TableAtribute)
--USE database
DROP DATABASE TCG;

CREATE DATABASE TCG;

USE TCG;

CREATE TABLE CardType {
    CardTypeId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CardType nvarchar(50) NOT NULL,
};

CREATE TABLE CardOrigin {
    CardOriginId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CardOrigin nvarchar(50) NOT NULL,
};

CREATE TABLE CardElement {
    CardElementId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CardElement nvarchar(50) NOT NULL,
};

CREATE TABLE CardRarity {
    CardRarityId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CardRarity nvarchar(50) NOT NULL,
};
CREATE TABLE Card {
    CardId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
    CardName nvarchar(100) NOT NULL,
    CardTypeID bigint NOT NULL FOREIGN KEY REFERENCES CardType(Card),
    CardOriginId bigint NOT NULL FOREIGN KEY REFERENCES CardOrigin(Card),
    CardElementId bigint NOT NULL FOREIGN KEY REFERENCES CardElement(Card),
    CardRarityId bigint NOT NULL FOREIGN KEY REFERENCES CardRarity(Card),
};

CREATE TABLE Transaction {
    OrderId bigint NOT NULL IDENTITY(1,1) PRIMARY KEY ,
    OrderPrice int NOT NULL,
    OrderTime date NOT NULL,
};

INSERT INTO CardType (CardType) VALUES ('Normal');
INSERT INTO CardType (CardType) VALUES ('Spell');
INSERT INTO CardType (CardType) VALUES ('Trap');
INSERT INTO CardType (CardType) VALUES ()

INSERT INTO Card (CardName, CardType, CardOrigin, CardElement, CardRarity) VALUES ('')