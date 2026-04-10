const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MANI-X-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0JrMlAvblh5Vk0rOVgxZWwrZ1c3ODhrbWdtR2htWHU2K3NVNjM0WlIwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXpxSzJHUDhaeWhUS0hTL2tvMkp4MWVLVHVOWlJINzNCd093VVdrdmNXST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R1o0SW9WRjRCZU9VdW0zL0l1WnRESVgrelEvNExYaWdKbkVnRXJiZ25jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDaUt2YVQwZjIxb1BtTk1rcEJMdFNtSG5FOC9QM282TVNxbHdhd1BFUEZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktEYXdod2ltSmhNU2JVUEFXano0aUVYMlpKclltL3RjMzNkdVJkK1N6RTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhVZTJ4bm5IcDFUaytpYXU1T3dZc09aSi9LdzVBZTFQTXJuMS9RS2t1WHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBBeVNHTHlrZWIrSGFHK2Z3d2Y1Ukx6QUFvSkpPckFGS3pZSVg4cnBuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkdndUJwa3JqMkM1SXRqZmJjbURzNTJaMWR5RkpiMFFocG9FdUlZcEZBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRDTCt3OXU1NjkwMWd3WXJwVkR5bERLdUJNQmJwV05QODNaTkNtdTlxeWZPQ25Da0E4UUprSzVOWHpHM2VhUVF6SG5CR2Y2Y1F1NTRuRm1qR091cWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJkSXIrLzNmcWYvOTA3Ty9peFVPaUVNUnlvTi80bW13ZkZma0hVSEVZR0d3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA2OTU1ODc1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTU2MkY2Mjc1M0JBRUIwMzZBQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc1ODE0MTUzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNjk1NTg3NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0NThDRjBBMUI3MkM4QzU1OEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NTgxNDE1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDY5NTU4NzU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMTZDRjFEQ0VDNjlDREQ0QjZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzU4MTQxNTh9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjkyMzA2OTU1ODc1NzoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTg0OTcxODkzNDE2MTQ5OjFAbGlkIiwibmFtZSI6Ik1FSFJVIPCfjoAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tLSDJjOEVFUGVMNDg0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNPOThsN1lPWG1yOFNkdEFxdzA0OFlrRVdzOTF2aFljdDVnOHBDcjdVV0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldNTEMwUVpXMS91VER3WkcxMmpZWlY5TW45UW0zenA5RER6UjNjZVV5RC9wZklGUFhxMFNxZ0dldWhuVG9nTlpuYWR4aEpyYXhCNnAwK0U4Ri9IS2d3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNUWFFcUNKWUlUczV6MjNLdGhISm5WTklIdFAyT1EyNG1hOXdXV1YwVGFCVHh2dUtaNXBDRi8yVjNmQkRtY2YvTGdGNU5talplTFVmcWtvNXlQcHNpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA2OTU1ODc1NzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhEdmZKZTJEbDVxL0VuYlFLc05PUEdKQkZyUGRiNFdITGVZUEtRcSsxRmgifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc1ODE0MTUxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpPUCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MANI X  ♥️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/y67z0s.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "/",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MANI X MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MANI X MD ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923149464387",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "USMAN KHAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "MANI X Official  ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/y67z0s.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> MANI X MD is alive and kicking ",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923149464387",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
