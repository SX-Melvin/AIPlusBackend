# AIPlusBackend

```
-- CSDB.otcs.AIPlusChats definition

-- Drop table

-- DROP TABLE CSDB.otcs.AIPlusChats;

CREATE TABLE CSDB.otcs.AIPlusChats (
	ID bigint IDENTITY(1,1) NOT NULL,
	IsHuman bit DEFAULT 1 NOT NULL,
	ChatID bigint NOT NULL,
	Message text COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NOT NULL
);


-- CSDB.otcs.AIPlus_FileVersions definition

-- Drop table

-- DROP TABLE CSDB.otcs.AIPlus_FileVersions;

CREATE TABLE CSDB.otcs.AIPlus_FileVersions (
	ID bigint IDENTITY(1,1) NOT NULL,
	VerNum int NOT NULL,
	NodeID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NULL,
	Name varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ParentID bigint NOT NULL
);


-- CSDB.otcs.AIPlus_SyncedFiles definition

-- Drop table

-- DROP TABLE CSDB.otcs.AIPlus_SyncedFiles;

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


-- CSDB.otcs.AIPlus_TempFile definition

-- Drop table

-- DROP TABLE CSDB.otcs.AIPlus_TempFile;

CREATE TABLE CSDB.otcs.AIPlus_TempFile (
	ID bigint IDENTITY(1,1) NOT NULL,
	JobId varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	WorkspaceID varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	DeleteAt datetime2(0) NOT NULL
);
```