const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFmNlBZWC9ZWTR1OStDd0o1aWFVZzV1N3V2V1Jhd3FPMHBtWHN0RXEwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkl4ZjNScmE2Q1l3MVNrZGV0RXJBckQwTi9oblRmd3VnK1h2R0FMbnVDaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHlmOGIzSCtibElWbkRrK2dOZnQ0aEtrY2czMWFZUmEyZFFjR3hWZ1ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGbUVVd1VPdlB0dEk1Zm4zWFBDY1ppc0dCVEFnck01U2JjYm9DejBLNEd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOc2tZZEF5MGJtRWtNaWFLdHFFOFVzSmxpejhsRklFRFZsdnJ5eTEvVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJLZWtORG92b2cxTkovbkpXUktXc0V1NEk1dThhYnI2aGVNNWNjU1M5bDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkQ5MnBNVlJ4Y2g2aktFQnJ6TzZ4ZDh0UURnU2ZyOFpjSnFYdjRZMlNYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZSL0JBbndLeWVFYXJPWkptY2tnMnF1V0hic0NFZjVZSitHVHZ1ZnBDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitWcmJpeUR5ejhUdmF2S1BJelI5NXVCWUEwQ3VPSzVxVVRDRVJIQ1NTZjhpSmMrUWdjbXgvQ2svUDFSWE1SMVc1RzIrUjZWUzVyZnViZHBEd3V5SGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJabzhqVVE1ZWcvTzhaTmVPc0hWZTl5ekVrYlRaZzdYdWhIZG5IeDZCRHlzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5MzE1MjQxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRDA5NjgyODk1MzQ5NTVEOUQ4QTU3MDI2M0Y1NDI0QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDk4OTI0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTMxNTI0MTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDcyRjZCRUU5NkNGRjI4NTExNDcwQjVGQTE0NjUyQTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ5ODkyNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOEtUSDZXVjciLCJtZSI6eyJpZCI6IjkyMzI5MzE1MjQxNDo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM2OTc1NDA3Nzg4MjExOjlAbGlkIiwibmFtZSI6IkJ1c3N5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMN01uc0VGRU9hWHlNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2VS91OHFnc0ZXKzA5Q0p6TXNjcGFhTlFkVWxLVVcxdnp0d1gra2ZSclFFPSIsImFjY291bnRTaWduYXR1cmUiOiJhZ3VETVdkTk5ZMHFzZ3hjWHFEOEdJNzhWaCszV1laVWE4VmNIdW15L0YvRXJ1NUZ3NytRSW56UjFKeUdna0sxNUk2WDFDeFdENSsrWktJTUxOeHVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieTZLQlEvTEwzdHh0WDRHUnhjNlRiOUowYjJmMHp0ZHlPSkhKUHJyd29ZdFhFMVkzUlVtd1dJSHlJREhNZDljK2pwYkpZc3lZRzdFODRzeUkreG1raUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyOTMxNTI0MTQ6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlbFA3dktvTEJWdnRQUWljekxIS1dtalVIVkpTbEZ0Yjg3Y0YvcEgwYTBCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY0OTg5MjAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzRlIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ꧁HISSARI-BACHA-MD꧂ 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qeq0cg.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "꧁HISSARI-BACHA-MD꧂",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "꧁HISSARI-BACHA-MD꧂",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "03142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*꧁HISSARI-BACHA-MD꧂*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꧁HISSARI-BACHA-MD꧂ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qeq0cg.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
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
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "03142854207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
