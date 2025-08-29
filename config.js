const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HISSARI-BACHA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBPY05JdU5PYURJVjZWZ09wTlEranYwY0twMkVIWkU0dHhQVVJnSDQzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1RORzV3eFBSWkN1N2Ftc0VCdVVsNXNTdGtBRktIQzI2Y1gxZ3MxMHNXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZR2V0TFpDU3MwamQ3TG1IamppRjl3bzV3YjQ2WVY4OUJtNy8xc2ZmWjEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1YXE1SDEzN2RuUDluNUNtTzdneVcrWHh0WEROUHRxa2x5VEJoUmg5eFVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBK0NQaXlMSlF6ZllwYU5FTC95Ykxad3kvdks2S3FkU1kwOUlQeW1na1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMvazZVTXNsd1o1SzQzSHN3UjMzQ1pTZWd5aGM3emFDWkM1MVA3ZmxlRG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEo3cGdhOGl1WkVLdTVHYlZWcSt3ckJtQUtXc3AxOXlkMFZ2b0RDRnFWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ09DZlFwN3FkUmVieDhPMmpFeVZXbUc0RHd1T05HSUdOS3Bla2l6eFNpMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQzWkZ3bUcweWtsbE5MWVl5YVBwLzhwZUFjaksvdDlsVWFXNXhLNysxbFlLRUxBczZHVHRXd0tKODZldXpTdXV6WWpyeXczNWZnM1NjSjBIQlpuL0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJjVFozK1pHVzIvUWpwY3ZZeU03aDU5WGo0dTNHdSsvK2dpbC9qdkhHZDNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKUUw0SFpUWCIsIm1lIjp7ImlkIjoiOTIzMjkzMTUyNDE0OjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzY5NzU0MDc3ODgyMTE6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzTW5zRUZFS2k4eHNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZVL3U4cWdzRlcrMDlDSnpNc2NwYWFOUWRVbEtVVzF2enR3WCtrZlJyUUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpvbmNMNGhFUlhaUkRJNEpRamk1cDVTTHdUeEVCandGK3pvTHRDd2ozdmxSaVhWb2xyZVBTZUVYMUxZV0Nja0swS1JOUUpHSUx2eXJQMHpiNjBvTUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1ZmVnN1Voc1dURlBMUlB3SFhyZ3VoZXcxelVRZmpiQ2tOaVVRYUN3WVhnM254c3VIYURHMGpHY1dhM1RMTDZoaXdoRG41RGJTdm5YM2JoWEM2Ym1Ddz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5MzE1MjQxNDo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVsUDd2S29MQlZ2dFBRaWN6TEhLV21qVUhWSlNsRnRiODdjRi9wSDBhMEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjQ3MDgzNCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPdFoifQ==",
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
