# AIPlusBackend

## Move `marked.min.js` to /img/csui/themes/carbonfiber/marked.min.js

## Move `aviator` folder to /support/csui/themes/carbonfiber/image/icons

## SQL Tables
```
CREATE TABLE CSDB.otcs.AIPlus_ChatRooms (
	ID bigint IDENTITY(1,1) NOT NULL,
	Name varchar(255) COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	UserID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NOT NULL
);

CREATE TABLE CSDB.otcs.AIPlus_ProjectRooms (
	ID int IDENTITY(1,1) NOT NULL,
	Title varchar(200) NOT NULL,
	UserID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NULL
);

CREATE TABLE CSDB.otcs.AIPlus_Chats (
	ID bigint IDENTITY(1,1) NOT NULL,
	IsHuman bit DEFAULT 1 NOT NULL,
	ChatRoomID bigint NOT NULL,
	Message varchar(5000) COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NOT NULL
);

CREATE TABLE CSDB.otcs.AIPlus_FileVersions (
	ID bigint IDENTITY(1,1) NOT NULL,
	VerNum int NOT NULL,
	NodeID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NULL,
	Name varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ParentID bigint NOT NULL
);

CREATE TABLE CSDB.otcs.AIPlus_SyncedFiles (
	ID int IDENTITY(1,1) NOT NULL,
	JobID varchar(100) COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	NodeID bigint NOT NULL,
	Name varchar(255) COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	VerNum int NOT NULL,
	Status varchar(100) COLLATE SQL_Latin1_General_CP1_CS_AS NULL,
	ParentID bigint NULL,
	WorkspaceID nvarchar(255) COLLATE SQL_Latin1_General_CP1_CS_AS NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NOT NULL,
	Error varchar(100) COLLATE SQL_Latin1_General_CP1_CS_AS NULL,
	CONSTRAINT AIPlus_SyncedFiles_PK PRIMARY KEY (JobID)
);

CREATE TABLE CSDB.otcs.AIPlus_TempFile (
	ID bigint IDENTITY(1,1) NOT NULL,
	JobId varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	WorkspaceID varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	DeleteAt datetime2(0) NOT NULL
);
```
