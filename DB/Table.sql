--IDENTITY(1,1)
--PRIMARY KEY
--FOREIGN KEY REFERENCES Table(TableAtribute)
--USE database
DROP DATABASE TCG;

CREATE DATABASE TCG;

USE TCG;

CREATE TABLE "User" (
    UserId bigint IDENTITY(1,1) PRIMARY KEY,
    Username varchar(16) NOT NULL UNIQUE CHECK (LEN(Username) >= 8),
    Password varchar(16) NOT NULL CHECK (LEN(Password) >= 8),
    Email varchar(50) NOT NULL UNIQUE,
    Money int NOT NULL,
    Actived bit NOT NULL,
    ActiveCode int,
    AvatarUrl nvarchar(300) NOT NULL,
);

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
    OnDeal bit NOT NULL,
);

CREATE TABLE Deal (
    DealId bigint IDENTITY(1,1) PRIMARY KEY,
    SellUserId bigint NOT NULL FOREIGN KEY REFERENCES "User"(UserId),
    BuyUserId bigint FOREIGN KEY REFERENCES "User"(UserId),
    UserCardId bigint foreign key references UserCard(UserCardId) NOT NULL,
    Price int NOT NULL,
    CreateDate datetime2(0) NOT NULL,
);

--Procedure
go
CREATE proc SearchOwnedStack
    @UserId bigint,
    @CardName nvarchar(60) = NULL,
    @CardTypeName nvarchar(10) = NULL,
    @CardOriginName nvarchar(20) = NULL,
    @CardElementName nvarchar(10) = NULL,
    @CardRarityName nvarchar(5) = NULL
as
begin
    select 
        Card.CardId, 
        CardName, 
        CardImageURL, 
        CardTypeName, 
        CardOriginName, 
        CardElementName, 
        CardRarityName, 
        OnDeal, 
        Count(UserId) as Quantity 
    from UserCard right join Card on UserCard.CardId = Card.CardId AND UserCard.UserId = @UserId
    where (UserId = @UserId or UserId IS NULL)
    and (@CardName = '' or @CardName IS NULL or CardName like '%' + @CardName + '%')
    and (@CardTypeName = '' or @CardTypeName IS NULL or CardTypeName = @CardTypeName)
    and (@CardOriginName = '' or @CardOriginName IS NULL or CardOriginName = @CardOriginName)
    and (@CardElementName ='' or @CardElementName IS NULL or CardElementName = @CardElementName)
    and (@CardRarityName = '' or @CardRarityName IS NULL or CardRarityName = @CardRarityName)
    GROUP by UserId, Card.CardId, CardName, CardImageURL, CardTypeName, CardOriginName, CardElementName, CardRarityName, OnDeal
    ORDER BY CardRarityName DESC, Quantity DESC
end