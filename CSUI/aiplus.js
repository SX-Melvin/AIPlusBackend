// Explorer Insight START
var wID = "psd_internal4-secure";
let activeController = false;
let ticket = window.aiPlusContext.options.context._user.connector.connection.session.ticket;
let userID = window.aiPlusContext.options.context._user.attributes.id;
let userHomepageID = userID == 1000 ? 2004 : userID;
let ARCHIVE_MESSAGE_COUNT = 0;
let TOOLS_SELECTED = "CHATS";
let PROJECT_ID = null;
let SESSION_ID = null;
let paginations = {chatHistory: {now: 1, max: null}, project: {now: 1, max: null}};
const CHATS_IMG = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_chats.svg"
const COPY_IMG = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_toolbar_copy.svg"
const SUCCESS_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_success.svg"
const GENERATE_IMG = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_generate.svg"
const CLOSE_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_smart_close.svg";
const CHAT_LOGO = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_chat.svg";
const INFO_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_info.svg";
const REFRESH_BLUE_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_refresh_blue.svg";
const PROJECT_LOGO = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_project.svg";
const PROJECTS_LOGO = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_projects.svg";
const WARNING_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_warning.svg";
const DOCUMENT_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_document.svg";
const IMAGE_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_image.svg";
const PDF_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_pdf.svg";
const EXCEL_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_excel.svg";
const POWERPOINT_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_powerpoint.svg";
const WORD_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_word.svg";
const TEXT_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_text.svg";
const EMAIL_MIME_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_mime_email.svg";
const REFRESH_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_refresh.svg";
const ARROW_DOWN_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_arrow_down.svg";
const TIMES_RED_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_times_red.svg";
const DELETE_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_delete.svg";
const ARROW_LEFT_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_arrow_left.svg";
const BOT_IMG = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_bot.svg";
const EDIT_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_edit.svg";
const FILES_ICON = "/img/csui/themes/carbonfiber/image/icons/aviator/aviator_files.svg";
let NODE_IDS_REFERENCE = [];
const nodesTableDiv = document.querySelector("div.binf-widgets");

var AIPlusConfig = {
  otcsApiUrl: "/otcs/cs.exe/api",
  apiUrl: "https://ai-agent-test.leapcount.com",
  backendUrl: "/aiplus"
}
var AIPlusUtils = {
  toggleSelectedTools: async function (selected) {
    TOOLS_SELECTED = selected;
    
    document.querySelectorAll(".msger-tool-btn").forEach(x => {
      if(x.id == `msger-tool-${TOOLS_SELECTED.toUpperCase()}`) {
        x.classList.add("hoverable-active");
      } else {
        x.classList.remove("hoverable-active");
      }
    });

    if(TOOLS_SELECTED.toUpperCase() == "CHATS") {
      document.querySelector("#chat-history-section").style.display = "block";
      document.querySelector("#chat-project-section").style.display = "none";
      document.querySelector("#clearbtn-text").innerText = "New Chat";
      document.querySelector("#dropzone-text").innerText = "Will be uploaded to your personal folder";
      document.querySelector("#showfiles").style.display = "none";
    } else if(TOOLS_SELECTED.toUpperCase() == "PROJECTS") {
      document.querySelector("#chat-history-section").style.display = "none";
      document.querySelector("#chat-project-section").style.display = "block";
      document.querySelector("#clearbtn-text").innerText = "New Project";
      document.querySelector("#dropzone-text").innerText = "Will be uploaded to your personal folder";
      document.querySelector("#showfiles").style.display = "flex";
      await AIPlusAPI.getProjectRooms(1);
    }
  },
  renderSmartFilingOptions: function(metadata, id) {
    let html = "";

    for(const m of metadata) {
      html += `
        <div class="smart-filing-actions-box" id="smart-filing-actions-box-${id}-${m.folderId}">
          <div id="smart-filing-loader-${id}-${m.folderId}" style="display:none">
            <div class="dot-sm"></div>
            <div class="dot-sm"></div>
            <div class="dot-sm"></div>
          </div>

          <input type="checkbox" id="smart-filing-checkbox-${id}-${m.folderId}" data-id="${m.folderId}" class="smart-filing-checkbox-${id}" />

          <label style="cursor:pointer" for="smart-filing-checkbox-${id}-${m.folderId}">
            <div id="smart-filing-title-${id}-${m.folderId}" style="font-weight:500">${m.path}</div>
          </label>
        </div>
      `;
    }

    return html;
  },
  toggleShowMessageButton: function(isVisible) {
    if(isVisible) {
      document.getElementById("show-messages-button").style.display = "block";
    } else {
      document.getElementById("show-messages-button").style.display = "none";
    }
  },
  finishFile: function(id) {
    document.getElementById(`loader-file-${id}`).style.display = "none";
  },
  setEnableToolsValue: function(value) {
    document.getElementById("enable-tools").checked = value;
  },
  isToolsEnabled: function() {
    return document.querySelector("#enable-tools").checked;
  },
  processChatSource: function(data) {
    let d = data;

    if(data.metadata) {
      d = {
        ...d,
        ...data.metadata,
      }
    }

    return `<a target="_blank" href="/otcs/cs.exe/app/nodes/${d.nodeId}" title="${d.fileName}" class="msger-btn shadow file-chat-bubble hoverable-fade">
      <img width="16px" src="${AIPlusUtils.getFileIcon(d.fileName)}">
      <div class="file-chat-bubble-text">${d.fileName}</div>
    </a>`;
  },
  appendChatItem: function(data) {
    return `<a target="_blank" href="/otcs/cs.exe/app/nodes/${data.customMetadata.nodeId}" title="${data.fileName}" class="msger-btn shadow file-chat-bubble hoverable-fade">
      <img width="16px" src="${AIPlusUtils.getFileIcon(data.fileName)}">
      <div class="file-chat-bubble-text">${data.fileName}</div>
    </a>`;
  },
  processChatSources: function(sources = []) {
    let result = "";
    for(const source of sources) {
      result += this.processChatSource(source);
    }
    return result;
  },
  processChatMetadata: function(id, metadata) {
    let result = `<div id="chat-item-${id}" class="chat-items-container msger-scroll" style="display:flex;flex-wrap:wrap;max-height:150px;overflow:auto">`;
    
    if(metadata == null) {
      result += `</div>`;
      return result;
    }
    
    for(const m of metadata) {
      if((m.type == "tool_call_end" || m.tool == "search_files" || m.tool == "list_files") && m.result?.data?.files != null) {
        for(const data of m.result.data.files ?? []) {
          result += this.appendChatItem(data);
        }
      }
    }
    
    result += `</div>`;
    return result;
  },
  appendChatProjectRoom: function(projects, appendMode = false) {
    const chatRoomContainer = document.querySelector("#chat-project-container");

    if(!appendMode) {
      chatRoomContainer.innerHTML = ``;
      if(projects == null || projects.length == 0) {
        chatRoomContainer.innerHTML = `<div style="padding:0px 10px;font-style:italic;font-weight:bold;font-size:13px">- No projects found -</div>`;
      }
    }

    for(const chatRoom of projects) {
      chatRoomContainer.insertAdjacentHTML("beforeend", `
        <button id="project-${chatRoom.id}" data-id="${chatRoom.sessionID}" style="display:flex;align-items:center" data-project-id="${chatRoom.id}" title="${chatRoom.title}" class="p-relative chat-project-item msger-btn hoverable ${PROJECT_ID == chatRoom.id ? "hoverable-active" : ""}">
          <img data-id="${chatRoom.sessionID}" data-project-id="${chatRoom.id}" src="${PROJECT_LOGO}" width="15" style="display:inline;margin-right:6px">  
          <span data-id="${chatRoom.sessionID}" data-project-id="${chatRoom.id}" class="chat-project-item-text">${chatRoom.title}</span>
          <div title="Delete this project" data-id="${chatRoom.sessionID}" data-project-id="${chatRoom.id}" id="tooltip-${chatRoom.id}" class="chat-project-tooltip">
            <img src="${DELETE_ICON}" style="width:13px;" class="hoverable-fade">
          </div>
        </button>`);
    }
    
    document.querySelectorAll('.chat-project-tooltip').forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        if(confirm("Delete this project?")) {
          await AIPlusAPI.deleteProject(btn.dataset.projectId);
        }
      });
    });

    document.querySelectorAll('.chat-project-item').forEach(btn => {
      btn.addEventListener("mouseenter", async (e) => {
        document.querySelector(`#tooltip-${e.target.dataset.projectId}`).style.display = "block";
      });
      btn.addEventListener("mouseleave", async (e) => {
        document.querySelector(`#tooltip-${e.target.dataset.projectId}`).style.display = "none";
      });

      btn.addEventListener("click", async (e) => {
        clearChats();
        SESSION_ID = e.target.dataset.id;
        PROJECT_ID = e.target.dataset.projectId;
        this.reRenderChatRooms();
        if(e.target.dataset.id != "null") await AIPlusAPI.getChats(e.target.dataset.id);
      });
    });
  },
  appendChatRoom: function(rooms, appendMode = false) {
    const chatRoomContainer = document.querySelector("#chat-room-container");

    if(!appendMode) {
      chatRoomContainer.innerHTML = ``;
      if(rooms?.sessions == null || rooms?.sessions?.length == 0) {
        chatRoomContainer.innerHTML = `<div style="padding:0px 10px;font-style:italic;font-size:13px">- No chats found -</div>`;
      }
    }

    for(const chatRoom of rooms.sessions) {
      chatRoomContainer.insertAdjacentHTML("beforeend", `
        <button data-id="${chatRoom.sessionId}" style="display:flex;align-items:center" title="${chatRoom.title}" class="p-relative chat-history-item msger-btn hoverable ${SESSION_ID == chatRoom.sessionId ? "hoverable-active" : ""}">
          <img data-id="${chatRoom.sessionId}" src="${CHAT_LOGO}" width="16" style="display:inline;margin-right:6px">  
          <span data-id="${chatRoom.sessionId}" class="chat-history-item-text">${chatRoom.title}</span>
          <div title="Delete this conversation" data-id="${chatRoom.sessionId}" id="tooltip-${chatRoom.sessionId}" class="chat-history-tooltip">
            <img src="${DELETE_ICON}" style="width:13px;" class="hoverable-fade">
          </div>
        </button>`);
    }
    
    document.querySelectorAll('.chat-history-tooltip').forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        if(confirm("Delete this chat?")) {
          await AIPlusAPI.deleteChatRoom(btn.dataset.id);
        }
      });
    });

    document.querySelectorAll('.chat-history-item').forEach(btn => {
      btn.addEventListener("mouseenter", async (e) => {
        document.querySelector(`#tooltip-${e.target.dataset.id}`).style.display = "block";
      });
      btn.addEventListener("mouseleave", async (e) => {
        document.querySelector(`#tooltip-${e.target.dataset.id}`).style.display = "none";
      });

      btn.addEventListener("click", async (e) => {
        clearChats();
        SESSION_ID = e.target.dataset.id;
        this.reRenderChatRooms();
        await AIPlusAPI.getChats(e.target.dataset.id);
      });
    });
  },
  showLoaderOnSmartFilingUpload(id, folderId) {
    const title = document.querySelector(`#smart-filing-title-${id}-${folderId}`);
    title.innerText = "Uploading " + title.innerText;
    document.querySelector(`#smart-filing-loader-${id}-${folderId}`).style.display = "block";
    document.querySelector(`#smart-filing-actions-box-${id}-${folderId} input[type=checkbox]`).remove();
    const badge = document.querySelector(`#smart-filing-actions-box-${id}-${folderId} .smart-filing-actions-badge`);
    if(badge) {
      badge.remove();
    }
  },
  showMessageResultOnSmartFilingUpload(id, folderId, text, isError = false) {
    if(isError) {
      document.querySelector(`#smart-filing-loader-${id}-${folderId}`).innerHTML = `<img src="${TIMES_RED_ICON}" width="16" />`;
      document.querySelector(`#smart-filing-title-${id}-${folderId}`).style.color = "#d51212";
    } else {
      document.querySelector(`#smart-filing-loader-${id}-${folderId}`).innerHTML = `<img src="${SUCCESS_ICON}" width="16" />`;
    }
    document.querySelector(`#smart-filing-title-${id}-${folderId}`).innerHTML = text;
  },
  reRenderChatRooms: function() {
    document.querySelectorAll('.chat-history-item').forEach(e => {
      if(e.dataset.id == SESSION_ID) {
        e.classList.add("hoverable-active");
      } else {
        e.classList.remove("hoverable-active");
      }
    });
    
    document.querySelectorAll('.chat-project-item').forEach(e => {
      if(PROJECT_ID == e.dataset.projectId) {
        e.classList.add("hoverable-active");
      } else {
        e.classList.remove("hoverable-active");
      }
    });
  },
  toggleProjectRoomLoader: function(isVisible) {
    if(isVisible) {
      document.querySelector("#chat-project-refresh").style.display = "none";
      document.querySelector("#chat-project-refresh-animation").style.display = "block";
    } else {
      document.querySelector("#chat-project-refresh").style.display = "block";
      document.querySelector("#chat-project-refresh-animation").style.display = "none";
    }
  },
  toggleChatHistoryLoader: function(isVisible) {
    if(isVisible) {
      document.querySelector("#chat-refresh").style.display = "none";
      document.querySelector("#chat-refresh-animation").style.display = "block";
    } else {
      document.querySelector("#chat-refresh").style.display = "block";
      document.querySelector("#chat-refresh-animation").style.display = "none";
    }
  },
  toggleChatSources: function(isVisible, id) {
    const el = document.getElementById(`chat-source-${id}`);
    if(el) {
      if(isVisible) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    }
  },
  toggleChatTools: function(isVisible, id) {
    const el = document.getElementById(`chat-tools-${id}`);
    if(isVisible) {
      if(!el) {
        el.style.display = "flex";
      }
    } else {
      if(el) {
        el.style.display = "none";
      }
    }
  },
  changeFileUploadStatus: function(id, progress, errorMessage = null) {
    const loader = document.querySelector(`#msg-${id} .msger-progress`);
    
    if(errorMessage != null) {
      if(loader) loader.remove();
      document.querySelector(`#file-error-${id}`).style.display = "flex";
      document.querySelector(`#msg-${id} .msger-error`).innerText = errorMessage;
      return;
    }

    if(loader) {
      if (progress >= 100) {
        document.querySelector(`#file-status-${id}`).remove();
        return;
      }
      loader.setAttribute("value", progress);
    }
  },
  parseMarkdown: function(text) {
    return marked.parse((text ?? "").replace(/```/g, "\n```"));
  },
  toggleLoaderEnableTools: function(isVisible) {
    const el = document.querySelector("#enable-tools");
    const loader = document.querySelector("#enable-tools-loader");
    if(isVisible) {
      el.style.display = "inline-block";
      loader.style.display = "none";
    } else {
      loader.style.display = "inline-block";
      el.style.display = "none";
    }
  },
  getFileIcon: function(fileName) {
    let result = DOCUMENT_MIME_ICON;
    const extension = fileName.split('.').pop()?.toLowerCase();
    if(extension) {
      if(extension == "pdf") {
        result = PDF_MIME_ICON;
      } else if(["msg", "eml"].includes(extension)) {
        result = EMAIL_MIME_ICON;
      } else if(["ppt", "pptx"].includes(extension)) {
        result = POWERPOINT_MIME_ICON;
      } else if(["txt", "csv"].includes(extension)) {
        result = TEXT_MIME_ICON;
      } else if(["png", "svg", "jpg", "jpeg", "gif"].includes(extension)) {
        result = IMAGE_MIME_ICON;
      } else if(["xls", "xlsx"].includes(extension)) {
        result = EXCEL_MIME_ICON;
      } else if(["doc", "docx"].includes(extension)) {
        result = WORD_MIME_ICON;
      }
    }
    return result;
  },
  toggleLoaderChatContainer: function(isVisible) {
    const el = document.querySelector("#msger-chat-container-loader");
    if(isVisible) {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
  },
  finishChatVerification: function(uniqueId, data) {
    if(document.querySelector(`#chat-verification-${uniqueId}`)) {
      document.querySelector(`#chat-verification-${uniqueId}`).style.display = "none";
    }
  },
  updateChatVerificationClaimStatus: function(uniqueId, data) {
    if(document.querySelector(`#chat-verification-${uniqueId}`)) {
      document.querySelector(`#chat-verification-${uniqueId} li#chat-claim-${data.index}`).innerHTML += `&nbsp;<span style="font-weight:500;">${data.verdict} (${data.source})</span>`;;
    }
  },
  appendChatVerificationClaim: function(uniqueId, progress) {
    if(document.querySelector(`#chat-verification-${uniqueId}`)) {
      document.querySelector(`#chat-verification-${uniqueId}`).style.display = "block";
      document.querySelector(`#chat-verification-${uniqueId}`).insertAdjacentHTML("beforeend", `<li id="chat-claim-${progress.index}"><span>${progress.claim}</span></li>`);
    }
  },
  removeLoaderTextbox: function() {
    if(document.getElementById("botloading")) {
      document.getElementById("botloading").remove();
    }
  },
  replaceTextMessageBox: function(msgId, msg) {
    document.querySelector(`#${msgId} .msg-text`).textContent = msg;
  },
  appendChatSourceItem: function(msgId, sources) {
    for(const m of sources ?? []) {
      document.querySelector(`#chat-source-section-${msgId}`).innerHTML += this.processChatSource(m);
    }
  },
  finishChatReasoning: function(msgId) {
    document.getElementById(`chat-reason-${msgId}`).click();
  },
  appendChatReasoning: function(msgId, text) {
    const chatReasonSection = document.querySelector(`#chat-reason-section-${msgId}`);
    chatReasonSection.innerHTML = this.parseMarkdown(text);
    chatReasonSection.scrollTop += 500;
    get(".msger-chat").scrollTop += 500;
  },
  appendMetadataItem: function(msgId, metadata) {
    if(metadata) {
      if(metadata.type == "tool_call_end" || metadata.tool == "search_files" || metadata.tool == "list_files") {
        for(const m of metadata.result.data.files ?? []) {
          document.querySelector(`#${msgId} .chat-items-container`).innerHTML += this.appendChatItem(m);
        }
      }
    }
  },
  getFileSubType: function(file) {
    let result = 144;

    if(file.type == null || file.type == "") {
      const splittedName = file.name.split(".");
      
      if(splittedName.length > 0) {
        const extension = splittedName[splittedName.length - 1];

        if(extension == "msg") {
          return 749;
        }
      }
    }
    return result;
  },
  appendTextMessageBox: function(msgId, raw = "") {
    document.querySelector(`#${msgId} .msg-text`).innerHTML = AIPlusUtils.parseMarkdown(raw);
    get(".msger-chat").scrollTop += 500;
  },
  finishMessageBox: function (msgId) {
    document.querySelector(`#${msgId} .msg-container`).style.display = "flex";
    document.querySelector(`#${msgId} .msg-text`).innerHTML = AIPlusUtils.parseMarkdown(document.querySelector(`#${msgId} .msg-text`).textContent);
    document.getElementById('submitquestion').style.display = '';
    document.getElementById('chatbotstop').style.display = 'none';
    if(document.getElementById("botloading")) {
      document.getElementById("botloading").remove();
    }
    get(".msger-chat").scrollTop += 500;
  }
}
var AIPlusAPI = {
  uploadToOTCS: async function(file, parentId = null) {
    try {
      const formdata = new FormData();
      formdata.append("body", JSON.stringify({
        type: AIPlusUtils.getFileSubType(file), 
        parent_id: parentId ?? userHomepageID, 
        name: file.name
      }));
      formdata.append("file", file, file.name);

      const response = await fetch(`${AIPlusConfig.otcsApiUrl}/v1/nodes`, {
        method: "POST",
        body: formdata,
        redirect: "follow",
        headers: {
          "otcsticket": ticket
        }
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  ask: async function(body) {
    if (activeController) {
      activeController.abort();
      console.log("Previous chat stream aborted.");
    }
    
    activeController = new AbortController();
    const { signal } = activeController;
    appendMessage('loading');
    const workspace = TOOLS_SELECTED == "PROJECTS" ? `${PROJECT_ID}_project` : wID;
    const response = await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${workspace}/chat/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem('aviatorToken')}`
      },
      body: JSON.stringify(body),
      signal
    });
  
    if (!response.ok) {
      console.error("Error:", response.statusText);
      return;
    }
  
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    let msgId = null;
    let content = "";
    let reason = "";
    let firstMessageHasRendered = false;
    let firstReasonHasRendered = false;
    let sources = [];
    
    // Read chunks as they arrive
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        break;
      }
      
      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;
      
      const lines = buffer.split("\n");
      buffer = lines.pop();
      
      for(const line of lines) {
        try {
          const json = line.replace("data: ", "");
          const data = JSON.parse(json);

          try {
            AIPlusUtils.removeLoaderTextbox();
            
            if(msgId == null) {
              msgId = appendMessage('left', "");
              AIPlusUtils.toggleChatTools(false, msgId);
              AIPlusUtils.toggleChatSources(false, msgId);
            }

            // CHECK Type
            if(data.type == 'verification_progress') {
              AIPlusUtils.appendChatVerificationClaim(msgId, data);
            } else if(data.type == 'verification_result') {
              AIPlusUtils.updateChatVerificationClaimStatus(msgId, data);
            } else if(data.type == 'reasoning') {
              if(!firstReasonHasRendered) {
                document.querySelector(`#chat-reason-${msgId}`).style.display = "flex";
                document.getElementById(`chat-reason-${msgId}`).click();
                firstReasonHasRendered = true;
              }
              reason += data.delta ?? "";
              AIPlusUtils.appendChatReasoning(msgId, reason);
            } else if (data.type == 'sources') {
              AIPlusUtils.appendChatSourceItem(msgId, data.sources ?? []);
              sources = data.sources;
            } else if(data.type == 'tool_call_end') {
              AIPlusUtils.appendMetadataItem(`msg-${msgId}`, data);
            } else if(data.type == 'content') {
              if(!firstMessageHasRendered) {
                AIPlusUtils.replaceTextMessageBox(`msg-${msgId}`, "");
                AIPlusUtils.finishChatReasoning(msgId);
                firstMessageHasRendered = true;
              }
              content += data.delta ?? "";
              AIPlusUtils.appendTextMessageBox(`msg-${msgId}`, content);
            } else if(data.type == 'done') {
              AIPlusUtils.removeLoaderTextbox();
              AIPlusUtils.toggleChatTools(true, msgId);
              AIPlusUtils.toggleChatSources(sources.length > 0, msgId);
            } else if(data.type == 'thinking') {
              AIPlusUtils.removeLoaderTextbox();
              AIPlusUtils.replaceTextMessageBox(`msg-${msgId}`, data.message);
            } else if(data.type == 'verification_end') {
              AIPlusUtils.finishChatVerification(msgId);
            } else if(data.type == 'verification_start') {
              if(!firstMessageHasRendered) {
                AIPlusUtils.replaceTextMessageBox(`msg-${msgId}`, "");
                AIPlusUtils.finishChatReasoning(msgId);
                firstMessageHasRendered = true;
              }
              AIPlusUtils.removeLoaderTextbox();
              AIPlusUtils.replaceTextMessageBox(`msg-${msgId}`, data.message);
            } else if(data.type == 'error') {
              console.error(data.error);
              alert(data.error);
            }
          } catch (error) {
            console.error(error);
          }
        }
        catch(err) {
          continue;
        }
      }
    }

    activeController = null;
    AIPlusUtils.finishMessageBox(`msg-${msgId}`);
    
    await AIPlusAPI.getChatRooms(1);
  },
  getFilingSuggestion: async function(file) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${AIPlusConfig.backendUrl}/Api/AI/Filing/Suggestion/${userID}`, {
        method: "POST",
        body: formData,
        redirect: "follow",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('aviatorToken')}`
        }
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("getJob error:", error);
      throw error;
    }
  },
  createProject: async function(title) {
    try {
      const response = await fetch(`${AIPlusConfig.backendUrl}/api/project`, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({
          userId: userID,
          title
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      this.getProjectRooms(1);
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error);
      console.error("createProject error:", error);
      throw error;
    }
  },
  updateSession: async function(id) {
    try {
      AIPlusUtils.toggleLoaderEnableTools(false);
      const response = await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${wID}/sessions/${id}`, {
        method: "PATCH",
        redirect: "follow",
        body: JSON.stringify({
          settings: {
            topK: 10,
            enableTools: AIPlusUtils.isToolsEnabled()
          },
          userId: userID.toString(),
        }),
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('aviatorToken')}`,
          "Content-Type": "application/json"
        }
      });
      AIPlusUtils.toggleLoaderEnableTools(true);
      
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error);
      console.error("createSession error:", error);
      AIPlusUtils.toggleLoaderEnableTools(true);
      throw error;
    }
  },
  updateProjectSession: async function(id, title, sessionId) {
    try {
      const response = await fetch(`${AIPlusConfig.backendUrl}/api/project/${id}`, {
        method: "PATCH",
        redirect: "follow",
        body: JSON.stringify({
          sessionID: sessionId,
          title
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error);
      console.error("updateProjectSession error:", error);
      throw error;
    }
  },
  createSession: async function(name) {
    try {
      const workspace = TOOLS_SELECTED == "PROJECTS" ? `${PROJECT_ID}_project` : wID;
      const response = await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${workspace}/sessions`, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({
          settings: {
            topK: 10,
            enableTools: AIPlusUtils.isToolsEnabled()
          },
          title: name,
          userId: userID.toString(),
        }),
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('aviatorToken')}`,
          "Content-Type": "application/json"
        }
      });
      
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error);
      console.error("createSession error:", error);
      throw error;
    }
  },
  getArchiveMessages: async function(sessionId) {
    try {
      const response = await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${wID}/sessions/${sessionId}/archive?userId=${userID}&order=desc`, {
        method: "GET",
        redirect: "follow",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('aviatorToken')}`
        }
      });
      
      const result = await response.json();
      let idx = 0;

      for (const chat of result.messages) {
        const nextData = result.messages[idx+1];
        let sources = [];
        if(nextData != null && nextData.sources != null) {
          sources = nextData.sources;
        }
        appendMessage(chat.role == "user" ? "right" : "left", AIPlusUtils.parseMarkdown(chat.content), new Date(chat.timestamp), true, chat.toolCalls ?? [], sources, chat.reasoning ?? null);

        idx++;
      }
      return result;
    } catch (error) {
      console.error("getJob error:", error);
      throw error;
    }
  },
  getJob: async function(jobId) {
    try {
      const response = await fetch(`${AIPlusConfig.apiUrl}/api/jobs/${jobId}`, {
        method: "GET",
        redirect: "follow",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('aviatorToken')}`
        }
      });
      
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("getJob error:", error);
      throw error;
    }
  },
  deleteChatRoom: async function(id) {
    try {
      await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${wID}/sessions/${id}?userId=${userID}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("aviatorToken")}`
        },
        method: "DELETE",
        redirect: "follow"
      });
      if(SESSION_ID == id) {
        clearChats();
      }
      await this.getChatRooms(1);
    } catch (error) {
      console.error("getChatRooms error:", error);
      throw error;
    }
  },
  getProjectRooms: async function(page = 1, size = 30, appendMode = false) {
    try {
      AIPlusUtils.toggleProjectRoomLoader(true);
      if(size == null) size = 30;

      const response = await fetch(`${AIPlusConfig.backendUrl}/api/project/user/${userID}/project?pageNumber=${page}&pageSize=${size}`, {
        method: "GET",
        redirect: "follow"
      });
  
      const result = await response.json();
      paginations.project.max = result.data.totalPage;
      paginations.project.now = page;
      AIPlusUtils.appendChatProjectRoom(result.data.data, appendMode);
      AIPlusUtils.toggleProjectRoomLoader(false);
      return result;
    } catch (error) {
      console.error("getProjectRooms error:", error);
      throw error;
    }
  },
  getChatRooms: async function(page = 1, size = 30, appendMode = false) {
    try {
      AIPlusUtils.toggleChatHistoryLoader(true);
      if(size == null) size = 30;

      const response = await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${wID}/sessions?pageNumber=${page}&pageSize=${size}&userId=${userID}&order=desc`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("aviatorToken")}`
        },
        method: "GET",
        redirect: "follow"
      });
  
      const result = await response.json();
      paginations.chatHistory.max = result.pagination.totalPages;
      paginations.chatHistory.now = page;
      AIPlusUtils.appendChatRoom(result, appendMode);
      AIPlusUtils.toggleChatHistoryLoader(false);
      return result;
    } catch (error) {
      console.error("getChatRooms error:", error);
      throw error;
    }
  },
  getChats: async function(chatId, size = 25, appendMode = true) {
    try {
      if(size == null) size = 25;
      const workspace = TOOLS_SELECTED == "PROJECTS" ? `${PROJECT_ID}_project` : wID;
      AIPlusUtils.toggleLoaderChatContainer(true);
      const response = await fetch(`${AIPlusConfig.apiUrl}/api/workspaces/${workspace}/sessions/${chatId}?order=desc&includeMessages=true&userId=${userID}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("aviatorToken")}`
        },
        method: "GET",
        redirect: "follow"
      });
      
      const result = await response.json();
      ARCHIVE_MESSAGE_COUNT = result?.summary?.archivedMessageCount ?? 0;
      AIPlusUtils.toggleShowMessageButton(false);
      AIPlusUtils.setEnableToolsValue(result.settings.enableTools);
      let idx = 0;
      
      for (const chat of result.messages) {
        const nextData = result.messages[idx+1];
        let sources = [];
        if(nextData != null && nextData.sources != null) {
          sources = nextData.sources;
        }
        appendMessage(chat.role == "user" ? "right" : "left", AIPlusUtils.parseMarkdown(chat.content), new Date(chat.timestamp), appendMode, chat.toolCalls ?? [], sources, chat.reasoning ?? null);

        idx++;
      }

      AIPlusUtils.toggleLoaderChatContainer(false);
      return result;
    } catch (error) {
      console.error("getChats error:", error);
      AIPlusUtils.toggleLoaderChatContainer(false);
      throw error;
    }
  },
  ingest: async function(file, metadata = "", priority = 10) {
    try {
      const formData = new FormData();
      const workspace = TOOLS_SELECTED == "PROJECTS" ? `${PROJECT_ID}_project` : wID;
      formData.append("workspaceId", workspace);
      formData.append("metadata", metadata);
      formData.append("priority", priority);
      formData.append("file", file, file.name);
      
      const response = await fetch(`${AIPlusConfig.apiUrl}/api/documents`, {
        method: "POST",
        body: formData,
        redirect: "follow",
        headers: {
          "Authorization": `Bearer ${sessionStorage.getItem('aviatorToken')}`,
          // "Content-Type": "multipart/form-data"
        }
      });
  
      return await response.json();
    } catch (error) {
      console.error("Ingest error:", error);
    }
  },
  deleteProject: async function(id) {
    const response = await fetch(`${AIPlusConfig.backendUrl}/api/project/${id}`, {
      method: "DELETE",
      redirect: "follow"
    });

    this.getProjectRooms(1);
    const result = await response.json();
    return result;
  },
  login: async function() {
    const response = await fetch(`${AIPlusConfig.backendUrl}/api/ai/login`, {
      method: "POST",
      redirect: "follow"
    });

    const result = await response.json();
    if(result.data.token) {
      sessionStorage.setItem("aviatorToken", result.data.token);
    }
    return result;
  }
}

async function botResponse(questionToAsk) {
  const message = {role: "user", "content": questionToAsk};
  if(SESSION_ID == null || SESSION_ID == "null") {
    const session = await AIPlusAPI.createSession(questionToAsk);
    if(session == null) {
      return;
    }
    SESSION_ID = session.sessionId;
    if(TOOLS_SELECTED == "PROJECTS") {
      await AIPlusAPI.updateProjectSession(PROJECT_ID, null, SESSION_ID);
      document.getElementById(`project-${PROJECT_ID}`).dataset.id = SESSION_ID;
      document.querySelector(`#project-${PROJECT_ID} span`).dataset.id = SESSION_ID;
      document.querySelector(`#project-${PROJECT_ID} img`).dataset.id = SESSION_ID;
    }
  }
  
  if(NODE_IDS_REFERENCE != null && NODE_IDS_REFERENCE.length > 0) {
    message.nodeIds = NODE_IDS_REFERENCE;
  }

  NODE_IDS_REFERENCE = [];

  await AIPlusAPI.ask({
    enableQueryRewrite: true,
    enableReasoning: true,
    streamReasoning: true,
    sessionId: SESSION_ID,
    enableFactCheck: true,
    factCheckClaims: 1,
    userId: userID.toString(),
    messages: [
      message
    ]
  });
}

async function handleFiles(files) {
  files = [...files];
  
  // Create a DataTransfer to hold the files
  const dataTransfer = new DataTransfer();
  files.forEach(file => dataTransfer.items.add(file));

  const fileList = [];
  document.getElementById('file-input').files = dataTransfer.files;

  // Render each of the file boxes
  for(const file of files) {
    fileList.push({file, id: appendMessage("file-upload-load", file.name)});
  }

  if(TOOLS_SELECTED == "PROJECTS" && PROJECT_ID == null) {
    alert("Please select a project");
    return;
  }

  // Upload each of the files to OTCS
  idx = 0
  const jobs = [];
  for(const file of fileList) {
    const node = await AIPlusAPI.uploadToOTCS(file.file);
    if(node.id) {
      jobs.push({
        nodeId: node.id,
        id: file.id,
        file: file.file
      });
      AIPlusUtils.changeFileUploadStatus(file.id, 20);
    } else if (node.error) {
      AIPlusUtils.changeFileUploadStatus(file.id, 0, `Error when uploading ${file.file.name} to personal folder: ${node.error}`);
    }
  }
  
  // Ingest each of the files to agent
  let queues = [];
  let suggestionFilings = [];
  for(const job of jobs) {
    const jobResult = await AIPlusAPI.ingest(job.file, JSON.stringify({"nodeId": job.nodeId}), 10);
    if(jobResult.existingFile) {
      suggestionFilings.push(job);
    } else if(jobResult != null && jobResult.status != null && jobResult.status.toLowerCase() == "queued") {
      queues.push({
        file: job.file,
        id: job.id,
        job: jobResult
      });
      AIPlusUtils.changeFileUploadStatus(job.id, 40);
    } else if (jobResult.error) {
      AIPlusUtils.changeFileUploadStatus(job.id, 0, `Error when ingesting ${job.file.name}: ${jobResult.message ?? jobResult.error}`);
    }
  }

  const checkJobs = async () => {
    const jobs = [...queues];
  
    for (const job of jobs) {
      const getJob = await AIPlusAPI.getJob(job.job.jobId);
  
      if (getJob.status?.toLowerCase() === "completed") {
        queues = queues.filter(x => x.job.jobId !== job.job.jobId);
        suggestionFilings.push(job);
        AIPlusUtils.changeFileUploadStatus(job.id, 60);
      } else if (getJob.status?.toLowerCase() === "failed") {
        queues = queues.filter(x => x.job.jobId !== job.job.jobId);
        AIPlusUtils.changeFileUploadStatus(job.id, 0, `Error when ingesting ${job.file.name}: ${getJob.error ?? "An unxpected error occurred"}`);
      }
    }
  
    if (queues.length > 0) {
      setTimeout(checkJobs, 3000);
    }
  };
  
  const checkSuggestionFiling = async () => {
    const files = [...suggestionFilings];
  
    for (const file of files) {
      try {
        AIPlusUtils.changeFileUploadStatus(file.id, 80);
        const filingSuggestion = await AIPlusAPI.getFilingSuggestion(file.file);
        if(filingSuggestion.data.suggestions != null && filingSuggestion.data.suggestions.length > 0) {
          AIPlusUtils.changeFileUploadStatus(file.id, 100);
          appendMessage("smart-filing", "", null, false, null, [], null, {
            suggestions: filingSuggestion.data.suggestions,
            file: file.file
          });
        } else {
          console.warn("no filing suggestion found: " + filingSuggestion);
        }
        suggestionFilings = suggestionFilings.filter(x => x.id != file.id);
      } catch (error) {
        AIPlusUtils.changeFileUploadStatus(file.id, 0, `Error when analyzing ${file.file.name}: ${error.message ?? "An unxpected error occurred"}`);
      }
    }
      
    if (queues.length > 0 || suggestionFilings.length > 0) {
      setTimeout(checkSuggestionFiling, 3000);
    }
  };
  
  checkJobs();
  checkSuggestionFiling();
}

function appendMessage(side, text, date = null, appendOnFirstChild = false, metadata = null, sources = [], reason = null, smartFilingMetadata = {}) {
  const msgerChat = get(".msger-chat");
  const uniqueId = new Date().getTime();

  if(date == null) {
    date = new Date();
  }

  let msgHTML = `<div id="msg-${uniqueId}" class="msg ${side}-msg">`;
  if(side == "file-upload") {
    msgHTML += `
    <div style="max-width:85%;">
      <div style="display:block; width:fit-content; word-wrap:break-word; overflow-wrap:break-word; white-space:normal;margin-left:auto; margin-right:0; text-align:right;" class="msg-bubble shadow">
        <div style="display:flex;align-items:center;gap:8px">
          <img src="${AIPlusUtils.getFileIcon(text)}" width="32" />
          <div>
            <div style="word-wrap:break-word; overflow-wrap:break-word; white-space:pre-line;text-align:left;margin-bottom:4px" class="msg-text">${text}</div>
          </div>
        </div>
      </div>
      </div>
    </div>`;
  } else if(side == "file-upload-load") {
    msgHTML += `
    <div style="max-width:85%;">
      <div style="display:block; width:fit-content; word-wrap:break-word; overflow-wrap:break-word; white-space:normal;margin-left:auto; margin-right:0; text-align:right;" class="msg-bubble shadow">
        <div style="display:flex;align-items:center;gap:8px">
          <img src="${AIPlusUtils.getFileIcon(text)}" width="32" />
          <div>
            <div style="word-wrap:break-word; overflow-wrap:break-word; white-space:pre-line;text-align:left;margin-bottom:4px" class="msg-text">${text}</div>
            <div id="file-status-${uniqueId}">
              <progress class="msger-progress" value="0" max="100" style="width:100%"></progress>
              <div id="file-error-${uniqueId}" style="display:none;align-items:center;margin-top:8px">
                <img src="${WARNING_ICON}" width="16" style="display:inline;margin-right:4px" />
                <span class="msger-error"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>`;
  } else if(side == "smart-filing") {
    msgHTML += `
      <div class="msg-img" style="background-image: url(${BOT_IMG}); margin-top: 20px; display: inherit;"></div>
        <div style="max-width:85%;background-color: #F4F4F4; width:fit-content;" class="msg-bubble shadow">
          <div id="bot-text-${uniqueId}" class="msg-text">
            I've analyzed "${smartFilingMetadata.file.name}". Where would you like to file it?
          </div>
          
          <div style="margin-top:10px" data-id="${uniqueId}" id="chat-smart-filing-${uniqueId}">
            ${AIPlusUtils.renderSmartFilingOptions(smartFilingMetadata.suggestions, uniqueId)}
          </div>

          <button data-id="${uniqueId}" title="File Selected" id="sf-submit-btn-${uniqueId}" class="msger-btn hoverable-fade" style="border:none;border-radius:40px!important;margin-top:12px;display:block;background:#2a6396;font-size:12px;font-weight:550;color:white;border-radius:8px;padding:8px 12px">
            <center>File Selected</center>
          </button>
        </div>
      </div>
    `;
  } else if(side == "left") {
    msgHTML += `
      <div class="msg-img" style="background-image: url(${BOT_IMG}); margin-top: 20px; display: inherit;"></div>
        <div style="max-width:85%;background-color: #F4F4F4; width:fit-content;" class="msg-bubble shadow">
          <div style="white-space: pre-line;" id="bot-text-${uniqueId}" class="msg-text">${text}</div>
          
          <ul data-id="${uniqueId}" id="chat-verification-${uniqueId}" style="display:none;padding-right:15px;padding-left:15px;margin-top:8px;margin-bottom:6px;font-size:11.5px;font-style:italic"></ul>

          <div data-id="${uniqueId}" data-id="false" id="chat-reason-${uniqueId}" class="chat-reason hoverable" style="display:none;margin-bottom:6px">
            <img data-id="${uniqueId}" src="${INFO_ICON}" width="12" draggable="false" />
            <span data-id="${uniqueId}" style="margin-left:4px;">Reasoning</span>
            <img data-id="${uniqueId}" class="chevron" draggable="false" src="${ARROW_LEFT_ICON}" width="14" />
          </div>

          <div id="chat-reason-section-${uniqueId}" style="display:none;" class="msger-scroll chat-reason-section">${AIPlusUtils.parseMarkdown(reason)}</div>

          ${AIPlusUtils.processChatMetadata(uniqueId, metadata)}
          
          <div class="msg-container" id="chat-tools-${uniqueId}" style="flex-direction: row; justify-content: flex-start;margin-top: 16px;">
            <div id="chat-copy-${uniqueId}" class="tooltip" style="background-image: url(${COPY_IMG}); cursor: pointer; width: 20px; height: 20px; margin-top: 10px;">
              <span class='chatbottooltip'>Copy</span>
            </div>
            <div data-id="${uniqueId}" id="chat-regenerate-${uniqueId}" class="tooltip" style="background-image: url(${GENERATE_IMG}); cursor: pointer; width: 20px; height: 20px; margin-top: 10px; margin-left: 10px;">
              <span class='chatbottooltip'>Regenerate</span>
            </div>
          </div>

          <div data-id="${uniqueId}" data-id="false" id="chat-source-${uniqueId}" class="chat-source hoverable">
            <div data-id="${uniqueId}" style="display:flex;align-items:center">
              <span data-id="${uniqueId}" style="font-size:12px">Source</span>
              <img data-id="${uniqueId}" draggable="false" src="${ARROW_LEFT_ICON}" width="14" />
            </div>
          </div>

          <div id="chat-source-section-${uniqueId}" style="display:none" class="msger-scroll chat-source-section">${AIPlusUtils.processChatSources(sources)}</div>
        </div>
      </div>
    `;
  } else if(side == "loading") {
      msgHTML = `
      <div id="botloading" class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${BOT_IMG}); margin-top: 20px; display: inherit;"></div>

      <div style="max-width:85%;background-color: #F4F4F4; width:fit-content;" class="msg-bubble shadow">
          <div class="msg-text">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
      </div>
      </div>`;
  } else if(side == "right") {
      msgHTML += `
      <div style="max-width:85%;">
          <div style="display:block; width:fit-content; word-wrap:break-word; overflow-wrap:break-word; white-space:normal;margin-left:auto; margin-right:0; text-align:right;" class="msg-bubble shadow"><div style="word-wrap:break-word; overflow-wrap:break-word; white-space:pre-line; color:black; text-align:left;" class="msg-text">${text}</div></div>
      </div>
      </div>
  `;
  }

  if(appendOnFirstChild) {
    msgerChat.insertAdjacentHTML("afterbegin", msgHTML);
  } else {
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  }

  let botChatDivEl = document.getElementById(`chat-copy-${uniqueId}`);
  const el = document.getElementById(`sf-submit-btn-${uniqueId}`);
  
  if(el) {
    el.addEventListener("click", async (e) => {
      const checked = [];
      document.querySelectorAll(`.smart-filing-checkbox-${el.dataset.id}`).forEach(x => {
        if(x.checked) {
          checked.push(x.dataset.id);
        }
      });
      
      if(checked.length == 0) {
        return;
      }
      
      document.querySelectorAll(`.smart-filing-checkbox-${el.dataset.id}`).forEach(x => {
        if(!x.checked) {
          document.querySelector(`#smart-filing-actions-box-${el.dataset.id}-${x.dataset.id}`).remove();
        }
      });
      
      el.style.display = "none";
      for(const nodeId of checked) {
        AIPlusUtils.showLoaderOnSmartFilingUpload(el.dataset.id, nodeId);
        const res = await AIPlusAPI.uploadToOTCS(smartFilingMetadata.file, nodeId);
        if(res.error) {
          AIPlusUtils.showMessageResultOnSmartFilingUpload(el.dataset.id, nodeId, res.error, true);
        } else {
          AIPlusUtils.showMessageResultOnSmartFilingUpload(el.dataset.id, nodeId, "Successfully uploaded!");
        }
      }
    });
  }

  if(botChatDivEl) {
    const copyTooltip = document.querySelector(`#chat-copy-${uniqueId} .chatbottooltip`);

    botChatDivEl.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const el = document.createElement("textarea");
      el.value = document.getElementById(`bot-text-${uniqueId}`).textContent;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      copyTooltip.textContent = "Copied!";

      setTimeout(() => {
        copyTooltip.textContent = "Copy";
      }, 3000);
      
      botChatDivEl.addEventListener("mouseenter", () => {
        copyTooltip.textContent = "Copy";
      });
    });
    
    document.getElementById(`chat-regenerate-${uniqueId}`).addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      let userTextDIvEl = document.querySelector(`#msg-${e.target.dataset.id}`).previousElementSibling.querySelector(".msg-text");
      document.getElementById('submitquestion').style.display = 'none';
      document.getElementById('chatbotstop').style.display = '';
      appendMessage("right", userTextDIvEl.innerHTML);
      botResponse(userTextDIvEl.innerHTML);
    });
    
    document.getElementById(`chat-source-${uniqueId}`).addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const el = document.getElementById(`chat-source-${uniqueId}`);
      const section = document.querySelector(`#chat-source-section-${e.target.dataset.id}`);

      if(el.dataset.active == "true") {
        el.dataset.active = "false";
        section.style.display = "none";
        el.querySelector("img").setAttribute("src", ARROW_LEFT_ICON);
      } else {
        el.dataset.active = "true";
        section.style.display = "flex";
        el.querySelector("img").setAttribute("src", ARROW_DOWN_ICON);
      }
    });
    
    if(reason != null && reason.length > 0) {
      // Reason isnt empty, add event handler to the element
      document.getElementById(`chat-reason-${uniqueId}`).style.display = "flex";
    }

    document.getElementById(`chat-reason-${uniqueId}`).addEventListener("click", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const el = document.getElementById(`chat-reason-${uniqueId}`);
      const section = document.querySelector(`#chat-reason-section-${e.target.dataset.id}`);

      if(el.dataset.active == "true") {
        el.dataset.active = "false";
        section.style.display = "none";
        el.querySelector(".chevron").setAttribute("src", ARROW_LEFT_ICON);
      } else {
        el.dataset.active = "true";
        section.style.display = "block";
        el.querySelector(".chevron").setAttribute("src", ARROW_DOWN_ICON);
      }
    });

    AIPlusUtils.toggleChatSources(sources.length > 0, uniqueId);
  }
  
  msgerChat.scrollTop += 500;
  return uniqueId;
} 

async function showNewProjectForm() {
  const newProjectName = prompt("Project Name:");
  if(newProjectName) {
    await AIPlusAPI.createProject(newProjectName);
  }
}

function clearChats() {
  SESSION_ID = null;

  const chat = document.querySelector('.msger-chat');
  [...chat.children].forEach(child => child.remove());

  document.getElementById('chatarea').value = "";
  if(document.getElementById("submitquestion")) {
    document.getElementById("submitquestion").disabled = true;
  }

  AIPlusUtils.reRenderChatRooms();
}

function get(selector, root = document) {
  return root.querySelector(selector);
}

function createChatbotElement() {
  const aiChatBotEl = document.createElement("div");

  aiChatBotEl.id = "aichatbottable";
  aiChatBotEl.classList.add("msger-container");
  aiChatBotEl.innerHTML = `
      <section class="msger-table" style="font-size: 14px; font-style: unset;">
        <div style="display: flex;height:100%" class="msger-main-content">
          <div id="mySidenav" class="sidenav">
              
            <div style="margin:5px 5px;height:calc(100% - 15px);overflow:hidden;padding-bottom:110px">
              <div class="chat-sidenav-title">MENU</div>

              <button id="msger-tool-CHATS" title="View all your chats" class="hoverable-active hoverable msger-btn chat-sidenav-sub-title msger-tool-btn" data-menu="CHATS" style="display:flex;width:100%;align-items:center;gap:6px">
                <img src="${CHATS_IMG}" style="width:14px" />
                <span>&nbsp;CHATS</span>
              </button>

              <button id="msger-tool-PROJECTS" title="View all your projects" class="hoverable msger-btn chat-sidenav-sub-title msger-tool-btn" data-menu="PROJECTS" style="display:flex;width:100%;align-items:center;gap:6px">
                <img src="${PROJECTS_LOGO}" style="width:14px" />
                <span>&nbsp;PROJECTS</span>
              </button>

              <br>

              <div id="chat-history-section">
                <div style="border-top:1px solid #a6a6a6;display:flex;justify-content:space-between;align-items:center;">
                  <div class="chat-sidenav-title">YOUR CHATS</div>  
                  <button title="Refresh conversations" id="chat-refresh" class="msger-btn"><img width="13px" src="${REFRESH_ICON}" /></button>
                  <img id="chat-refresh-animation" src="${REFRESH_BLUE_ICON}" width="16px" class="spin-animation" style="display:none" />
                </div>
                <div id="chat-room-container" class="msger-scroll" style="overflow:auto;height:96%;background:#eeeeee"></div>
              </div>

              <div id="chat-project-section" style="display:none">
                <div style="border-top:1px solid #a6a6a6;display:flex;justify-content:space-between;align-items:center;">
                  <div class="chat-sidenav-title">YOUR PROJECTS</div>  
                  <button title="Refresh conversations" id="chat-project-refresh" class="msger-btn"><img width="13px" src="${REFRESH_ICON}" /></button>
                  <img id="chat-project-refresh-animation" src="${REFRESH_BLUE_ICON}" width="16px" class="spin-animation" style="display:none" />
                </div>
                <div id="chat-project-container" class="msger-scroll" style="overflow:auto;height:96%;background:#eeeeee"></div>
              </div>
            </div>
          </div>
          
          <div class="msger-chat-container" style="position:relative;min-height: 0;">
            <div id="msger-dropzone" class="msger-dropzone msger-overlay">
              <center class="msger-drop-text">Drop files here<br /><br /><div id="dropzone-text">Will be uploaded to your personal folder</div></center>
            </div>
            
            <div class="msger-chat-loader msger-overlay" id="msger-chat-container-loader" style="display:none">
              <center class="msger-drop-text">
                <div class="dot-lg"></div>
                <div class="dot-lg"></div>
                <div class="dot-lg"></div>
              </center>
            </div>

            <header class="msger-header" style="border-left:1px solid whitesmoke">
              <div class="msger-header-title" id="chatbotmenu">
                <div style="margin-top:6px;font-size: 15px;font-weight: 600;height: 22px;color: #2c3e50;display:inline-block;vertical-align:middle">ASK ARK</div>
              </div>
                
              <div class="msger-header-options">
                <button title="Close" id="closeaviator" class="msg-img msger-img-btn hoverable-fade">
                  <img src="${CLOSE_ICON}" />
                </button>
              </div>
            </header>

              <div id="initial-msg-container" style="padding:0px 24px;position:relative">
                <div id="show-messages-button" class="show-all-message-popup shadow hoverable" title="Show all previous messages">
                  Show all messages
                </div>

                <center id="initial-msg" style="font-weight:500;border-bottom:1px solid #a6a6a6;padding: 20px 6px;margin-bottom:16px">
                  <div style="font-weight:550;font-size:16px;color:#164f95">
                    <span style="color:#43c4dc">ACCESSIBLE</span>&nbsp;•&nbsp;
                    <span style="color:#2A6396">RELIABLE</span>&nbsp;•&nbsp;
                    <span style="color:#d3b03b">KNOWLEDGE</span>
                  </div>
                  <div style="margin-top:6px;font-weight:550">I can help you analyze documents, finds files, and summarize policies.</div>
                  <div style="margin-top:18px;display:none">
                    <button style="background:none;border:1px solid #a6a6a6;border-radius:20px;padding:6px 12px;font-size:12px;" class="">Summarize latest report</button>
                  </div>
                </center>
              </div>
              <main class="msger-chat msger-scroll" id="chat-wrapper" style="padding-left:20px;position:relative"></main>
              
              <div id="files-container"></div>
              <div class="chat-container shadow" style="display: flex; flex-direction: column; gap: 10px; margin: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 8px; font-family: 'Inter', sans-serif;border:1px solid #d1d1d1">
                  <!-- Chat Input -->
                  <textarea id="chatarea" class="msger-input" rows="1" maxlength="2000" minlength="0" placeholder="Ask me something..." style="width: 100%; padding: 10px; border: none; background: transparent; resize: none; outline: none; font-family: inherit; font-size: 16px; min-height: 20px; max-height: 40px; overflow-y: auto;"></textarea>
              
                  <!-- Inline Buttons -->
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                      <div id="clearbtn" class="clear-button hoverable-fade" title="Create new conversation">
                        <img src="${EDIT_ICON}" width="12" />
                        <span style="font-size: 12px; color: whitesmoke;" id="clearbtn-text">New Chat</span>
                      </div>

                      <div id="showfiles" style="display:none" class="clear-button hoverable-fade" title="Show files in this workspace">
                        <img src="${FILES_ICON}" width="12" />
                        <span style="font-size: 12px; color: whitesmoke;" id="clearbtn-text">Files</span>
                      </div>
                    </div>
              
                      <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 4px; margin-right: 10px;">
                          <input checked="true" type="checkbox" id="enable-tools" style="width:14px">
                          <img src="${REFRESH_BLUE_ICON}" width="14" class="spin" id="enable-tools-loader" style="display:none" />
                          <label for="enable-tools"> Enable Tools</label>
                          <div style="margin-left:2px" title="Used for combining PDF files, getting tables from PDF, removing sensitive content, listing workspace files & finding files by name"><img src="${INFO_ICON}" draggable="false" width="12px" /></div>
                        </div>
              
                        <!-- File Input -->
                        <label for="file-input" class="icon-button hoverable-fade" style="cursor: pointer;" title="Upload files">
                            <svg width="20" height="20" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" fill="#2a6396"></path>
                            </svg>
                        </label>

                        <input style="display: none;" id="file-input" type="file" accept="image/png, .pdf">
            
                        <!-- Submit Button -->
                        <button title="Submit question" id="submitquestion" type="submit" class="icon-button hoverable-fade" style="cursor: pointer; background: none; border: none;" disabled="">
                          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" fill="#2a6396"></path>
                          </svg>
                        </button>
            
                        <!-- Stop Button -->
                        <button title="Stop generating" id="chatbotstop" type="button" class="icon-button hoverable-fade" style="display: none; cursor: pointer; background: none; border: none;">
                            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z" fill="#2a6396"></path>
                            </svg>
                        </button>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
  `;

  return aiChatBotEl;
}

async function showAviator(justCheckComponent = false) {
  if(document.querySelector("#aichatbottable")) return;

  nodesTableDiv.appendChild(createChatbotElement());

  document.getElementById("enable-tools").addEventListener("change", async (e) => {
    e.preventDefault();
    if(SESSION_ID != null && SESSION_ID != "null") {
      await AIPlusAPI.updateSession(SESSION_ID);
    }
  });
  
  document.querySelectorAll(".msger-tool-btn").forEach(x => {
    x.addEventListener("click", async (e) => {
      e.preventDefault();
      AIPlusUtils.toggleSelectedTools(x.dataset.menu);
    })
  });

  document.getElementById("show-messages-button").addEventListener("click", async (e) => {
    e.preventDefault();
    AIPlusUtils.toggleShowMessageButton(false);
    ARCHIVE_MESSAGE_COUNT = 0;
    document.getElementById("show-messages-button").style.display = 'none';
    await AIPlusAPI.getArchiveMessages(SESSION_ID);
  });

  // Handle the overlay dropzone area
  let dragCounter = 0;
  const dropzone = document.getElementById("msger-dropzone");
  const existingChatbot = document.getElementById("aichatbottable");

  function onDragOver(e) {
    e.preventDefault();
  }
  function onDropOver(e) {
    dragCounter = 0;
    dropzone.style.display = "none";
    dropzone.style.opacity = "1";
  }

  window.addEventListener("dragover", onDragOver);
  window.addEventListener("drop", onDropOver);

  dropzone.addEventListener("dragenter", (e) => {
    if (e.dataTransfer && e.dataTransfer.types.includes("Files")) {
      dragCounter++;
      dropzone.style.opacity = ".6";
      dropzone.style.display = "flex";
    }
  });

  dropzone.addEventListener("dragleave", (e) => {
    dragCounter--;
    dropzone.style.opacity = "1";
    if (dragCounter === 0) {
      dropzone.style.display = "none";
    }
  });

  dropzone.addEventListener("drop", (e) => {
    dragCounter = 0;
    dropzone.style.display = "none";
    dropzone.style.opacity = "1";
  });

  existingChatbot.addEventListener("dragenter", (e) => {
    if (e.dataTransfer && e.dataTransfer.types.includes("Files")) {
      dragCounter++;
      dropzone.style.display = "flex";
    }
  });

  existingChatbot.addEventListener("dragleave", (e) => {
    dragCounter--;
    if (dragCounter === 0) {
      dropzone.style.display = "none";
    }
  });

  existingChatbot.addEventListener("drop", (e) => {
    dragCounter = 0;
    dropzone.style.display = "none";
  });
  // Handle the overlay dropzone area

  document.getElementById('file-input').addEventListener('change', async function(event) {
    event.preventDefault();
    handleFiles([event.target.files[0]]);
  });

  const chatWrapper = document.getElementById('chat-wrapper');

  chatWrapper.addEventListener("scroll", async (e) => {
    if (chatWrapper.scrollTop <= 20) {
      const container = document.querySelector(".msger-chat");
      const oldScrollTop = container.scrollTop;
      const oldScrollHeight = container.scrollHeight;
      if(ARCHIVE_MESSAGE_COUNT > 0) {
        AIPlusUtils.toggleShowMessageButton(true);
      }
      document.querySelector(".msger-chat").scrollTop = oldScrollTop + (container.scrollHeight - oldScrollHeight);
    }
  });

  // Handle dropped files
  ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  dropzone.addEventListener("drop", handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }
  
  document.getElementById('chatarea').focus();
  document.getElementById('chatarea').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        document.getElementById('chatarea').value += '\n';
      } else {
        document.getElementById("submitquestion").disabled = false;
        document.getElementById("submitquestion").click();
        document.getElementById('chatarea').value = ""
      }
      event.preventDefault();
    }
  });
  
  // handle clear
  document.getElementById("clearbtn").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    if(TOOLS_SELECTED == "CHATS") {
      clearChats();
    } else if(TOOLS_SELECTED == "PROJECTS") {
      clearChats();
      showNewProjectForm();
    }
  });

  // handle show files of project
  document.getElementById("showfiles").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    
  });

  document.getElementById('chatarea').addEventListener('input', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const target = e.target;
    document.getElementById("chatarea").style.height = (document.getElementById("chatarea").scrollHeight) + "px";

    // Count the current number of characters
    const currentLength = target.value.length;
    if(document.getElementById("submitquestion"))
    {
    if(document.getElementById("submitquestion").disabled == true)
    {
        document.getElementById("submitquestion").disabled = false;
    }
    if(currentLength == 0)
    {
        document.getElementById("submitquestion").disabled = true;
    }
    }
  });

  const msgerInput = get(".msger-input");
  document.getElementById("submitquestion").addEventListener("click", async event => {
    event.preventDefault();
    event.stopImmediatePropagation();

    let botChatDivElStop = document.getElementById(`chatbotstop`);
    botChatDivElStop.style.display = '';
    document.getElementById('submitquestion').style.display = 'none';
    
    botChatDivElStop.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      document.getElementById('submitquestion').style.display = '';
      document.getElementById('chatbotstop').style.display = 'none';
      if(document.getElementById("botloading")) {
        document.getElementById("botloading").remove();
      }
      if(activeController != null) {
        activeController.abort()
      }
      activeController = null;
    });

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage("right", msgText);
    msgerInput.value = "";
    botResponse(msgText);
  });
  
  document.getElementById("closeaviator").addEventListener("click", (e) => {
    e.preventDefault();
    try {
      e.stopImmediatePropagation();
      document.getElementById("aichatbottable").remove();
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", onDropOver);
    } catch (error) {

    }
  });

  document.getElementById("chat-room-container").addEventListener("scroll", async () => {
    const container = document.getElementById("chat-room-container");
    const nearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 5;

    if (nearBottom) {
      if(paginations.chatHistory.now < paginations.chatHistory.max) {
        await AIPlusAPI.getChatRooms(paginations.chatHistory.now + 1, null, true);
      }
    }
  });

  document.getElementById("chat-refresh").addEventListener("click", async (e) => {
    await AIPlusAPI.getChatRooms(1);
  });

  document.getElementById("chat-project-refresh").addEventListener("click", async (e) => {
    await AIPlusAPI.getProjectRooms(1);
  });
  
  // OnRender
  if(!justCheckComponent) {
    clearChats();
    await AIPlusAPI.login();
    await AIPlusAPI.getChatRooms(1);
  }
}

const checkContext = setInterval(() => {
  if(window.aiPlusContext != null) {
    ticket = window.aiPlusContext.options.context._user.connector.connection.session.ticket;
    userID = window.aiPlusContext.options.context._user.attributes.id;
    userHomepageID = userID == 1000 ? 2004 : userID;
  }
}, 100);

window.aiPlusSendFilesToChatbot = async (nodes) => {
  showAviator(true);
  clearChats();
  NODE_IDS_REFERENCE = [];
  for(const node of nodes) {
    appendMessage("file-upload", node.attributes.name);
    NODE_IDS_REFERENCE.push(node.attributes.id.toString());
  }
  await AIPlusAPI.getChatRooms();
};

// Explorer Insight END