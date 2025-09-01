const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZWUG1YMm5Tb1JzejlzTXRpZU1sbHlKUElvZGtCdmdmanluRTZOeHhscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTdRS2FJYmwxTEhtOE0wdzhjNDBQSjdUczdOV3pYRWtobXlQMnRYVmVSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSXFRaW5WUjg0THlhSXd6ZkFrc2xHbzFLSGVGTGdmbDUyWVBHOXRhTTB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQeERUcnk1MEIzcm95ZjUvNUFMblFCZWxSSDB4MWdZZlBTNEdvS3JrbUZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLTDhUb0tFZ1JsZGFYN2VBbFgzVld3aDVVbUh1YzJKelFnUHFuRUxtVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVab2hNS3ZINDdLWTVyUE5vOEUvOGNiQWl5R3NYN1c5akljSlhaWll2V2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUh3V1U1dDJHc1BsMVhqMzdnbFJ0MWFGYkhGeXFybldyMTg5TnVkMDJYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2VwVXBsY1AzeUFJV3QzUEJHTkdRcU5KTVNKUGhOdjNWNk9vWDNuaURobz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVsRDFXK1NqMUZQWXJWc2t0dVltUTBCYzNzVTI4NnBwSDNDZG9WRDhkUU4xYmVYUzBoRkFoMDhNU21TYkZxNTNSZFVFT1J4NWszbkZrTEQxUG1BcmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiIwbWF3Uyt4Si95WlU4YXUvWDJwRkJCS0ZhcTlqQm1pdGswamwwNFhvQ1dnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJEVFQ1QVlHWiIsIm1lIjp7ImlkIjoiOTIzNzA4NTE4ODY4OjI1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjgyNjA2NTM0Njk4MDY6MjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYXJoc2NIRU02UDJNVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqNFllRjRwUCtOa3pNekZkMEkzQUh6cjFpaXZ1SmFtNDBlV09ibkhUaVdFPSIsImFjY291bnRTaWduYXR1cmUiOiJkS3VneDRpWHR2bWV6YnNCYU9oS2VXOC82VEhXWXl3aUNiK3c0MVNlR0FWUlVSaGhNMk5sdk1IQis4ekI5QVlYQUxzRmFPL1U5Q2g5ZFZKaTllRHVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZVFXUWFLRG5BWjlKbGVUSWEwMlVXZjJaYTZsUm04WkNObXFvWVhVRE5ZTWRLclBVdDJZR1NvQ2JVdC9HRnhnenBJUUlVcTNLa1I3d3lscEdlR2piZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM3MDg1MTg4Njg6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWStHSGhlS1QvalpNek14WGRDTndCODY5WW9yN2lXcHVOSGxqbTV4MDRsaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NzYwMDE4LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJmcCJ9",
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
