const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BuRmZOZGlYZzhTM3ZhZTJEMGxmS2VIcDZrd1VZK3pzbUVZUjRneEQzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWRsQXEySjFHL0JkSnprNW9UVXlsWlpHYTFZcG1lWWZMR1ZrWFlYV2JFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRlF3NHYvYkxHZUhqNWN1Y2ZJdTgxNmp4eGlmN2RzOTIzS2QyNDMvRDJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUEo5K2dsNkJ2Zm1UTHVibHFQOUxqVXpDcmY1L25GY3p2K3NsRkdKNjIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHcStjYjZ2M1dMRUZZR3ZxYndXc2dLcTJkYU9TNi82Q00vcTFleVJLbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9nN1FkSlYwTWxXTVpOeXBqTGpjekZnZEZITVJ4aG1vQ293NnNMdUg2Vjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01pNFdHYlBmemNuUnAxZExBNUNEeFBwa2RVZTJzVStkczJaZmIzMkFWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFN1NGV0ODltTmlpV3N5V0Z6Smt3MW4yUWFyVmxwb2w0SmdiZHNVdytoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFpZVJmL2N1WmwvRjlOUWR4TkNjNHo2WEIwKzV4SnhsdU9IbjE1TmZQRGRjRVJWeXZ5TWovM2lFZ2NYTkdaVXRKSENSWkRGYkdOdldZT3FzaVVkU2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6Im5heVNycTl5N1JLRXRLYzJFR01wYndxSXY2T0ROdTNJaTFJY3BwZ2dMbFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjkzMTUyNDE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM4NjkwRUVGNjQ4QjgyOEYxRjZEQjMyOEVBQzAwRTRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0NDU5NjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5MzE1MjQxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQzhEMTc3ODIzOEVGRjk4REU4RDdGNkZFMEJBNDM4QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDQ1OTY0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLWTZCRUJaSCIsIm1lIjp7ImlkIjoiOTIzMjkzMTUyNDE0OjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzY5NzU0MDc3ODgyMTE6N0BsaWQiLCJuYW1lIjoiQnVzc3kifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x6TW5zRUZFSVQ2eE1VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZVL3U4cWdzRlcrMDlDSnpNc2NwYWFOUWRVbEtVVzF2enR3WCtrZlJyUUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdDUXJkZFQ2NkNUR0swL2p4ckFDSFhHVUxhQlFHeGEweGpPLzVPR3JhRXBBNlkrZDF6bHpDeHI0L2dOTkZmeC96bWVjUEh3VmY3akllRUZBREhteEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2cFdCb29vLzdxMlZPV2xJNlRlNENKSG1yWEdzYWZ6amhjQkxHcnFrSzhuQ0ZPejFQN25CdDRBUXBUc2x2SkppeHVLR0EwaHB6KzVYMXlzcGJ1Z3ZoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5MzE1MjQxNDo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVsUDd2S29MQlZ2dFBRaWN6TEhLV21qVUhWSlNsRnRiODdjRi9wSDBhMEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ0NTk1OSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFNm8ifQ==",
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
