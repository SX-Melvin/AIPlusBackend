# CSUI AI Plus Integration Deployment Instructions

- Adjust codes from `csui-app.css`, `csui-app.js`, `csui-browse.css`, `csui-view-support.js` and `csui-browse.js` to `/img/csui/bundles/`

- Move `aiplus.js` to `/img/csui/themes/carbonfiber/aiplus.js`

- Move `marked.min.js` to `/img/csui/themes/carbonfiber/marked.min.js`

- Move `aviator` folder to `/support/csui/themes/carbonfiber/image/icons/`

- Move `aviator_webfonts` folder to `/support/csui/themes/carbonfiber/fonts/`

- Add the `.icon-toolbar-aviator` CSS rule from `workflow-all.css` to `/support/webwork/bundles/workflow-all.css`

# SQL Tables
```
CREATE TABLE CSDB.otcs.AIPlus_FileVersions (
	ID bigint IDENTITY(1,1) NOT NULL,
	VerNum int NOT NULL,
	NodeID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NULL,
	Name varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	ParentID bigint NOT NULL
);

CREATE TABLE CSDB.otcs.AIPlus_ProjectRooms (
	ID int IDENTITY(1,1) NOT NULL,
	Title varchar(200) COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	UserID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NULL,
	SessionID varchar(200) COLLATE SQL_Latin1_General_CP1_CS_AS NULL
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
	Error text COLLATE SQL_Latin1_General_CP1_CS_AS NULL
);

CREATE TABLE CSDB.otcs.AIPlus_SyncedFolders (
	ID int IDENTITY(1,1) NOT NULL,
	Name nvarchar(300) COLLATE SQL_Latin1_General_CP1_CS_AS NOT NULL,
	NodeID bigint NOT NULL,
	CreatedAt datetime2(0) DEFAULT getdate() NULL,
	Description text COLLATE SQL_Latin1_General_CP1_CS_AS NULL,
	Error text COLLATE SQL_Latin1_General_CP1_CS_AS NULL,
	CONSTRAINT AIPlus_SyncedFolders_UNIQUE UNIQUE (NodeID)
);

CREATE TABLE CSDB.otcs.AIPlus_TempFile (
	ID bigint IDENTITY(1,1) NOT NULL,
	JobId varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	WorkspaceID varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	DeleteAt datetime2(0) DEFAULT getdate() NULL,
	NodeID bigint NULL,
	Name varchar(255) COLLATE SQL_Latin1_General_CP1_CS_AS NULL
);
```
