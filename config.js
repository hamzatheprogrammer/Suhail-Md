const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48 45 926 63 74";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_32_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkc5cEJnWkVoNTJxQVlyUEkzcnNUZ0JmK1QxYXl0QnIvNEQ1aDB4RlA0V0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg0NTkyNjYzNzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU2NzREMUU3QjhCQzREMjQzQ0I3RDBBMEIwOTZBNURGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA0ODMxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4NDU5MjY2Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MDgyQTVEODgyMDdFREE3MDk3QUYyMURDNEFBMUZBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwNDgzMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODQ1OTI2NjM3NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTVDN0M1RTJBNkYxNEU5QjA5OTMxNDg4NzgzQzI3QUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDQ4MzE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg0NTkyNjYzNzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZCQzM3MjQ0RDcwMDQwQkMzRjc5NTE4RkI2MDk3RjA2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzA0ODMxOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVbU9aNkVyVFNBQ3BPN0ZabEpTenFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkwMzk0YmUyLTMzN2EtNDEzNi04MTkwLTRjYmI3YTY4NTRjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxNTMsXG4gICAgICAxOTAsXG4gICAgICA0MSxcbiAgICAgIDExOSxcbiAgICAgIDE4LFxuICAgICAgMTc5LFxuICAgICAgNTIsXG4gICAgICAyMzMsXG4gICAgICA2LFxuICAgICAgMjIyLFxuICAgICAgNTIsXG4gICAgICAyMCxcbiAgICAgIDM0LFxuICAgICAgMjE2LFxuICAgICAgMjQwLFxuICAgICAgMTUzLFxuICAgICAgMjksXG4gICAgICAyMjcsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyMzYsXG4gICAgICAxNTQsXG4gICAgICAxMjksXG4gICAgICAyMCxcbiAgICAgIDEyMCxcbiAgICAgIDcsXG4gICAgICAyMSxcbiAgICAgIDIzNCxcbiAgICAgIDEwMixcbiAgICAgIDE2NSxcbiAgICAgIDExLFxuICAgICAgMjE4LFxuICAgICAgMjA0LFxuICAgICAgNCxcbiAgICAgIDg0LFxuICAgICAgMTk3LFxuICAgICAgMTA3LFxuICAgICAgMTMxLFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUdKNUZUQzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4NDU5MjY2Mzc0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODUzMzMyMzc3NjIwNjo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkhhbXphIGp1dHRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS2k0ZFVGRVBmQ3pyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNLU1FBWVRWWU5XSzIzWXBUN2dkdlZKc1hRNDdSbkRsbEVRTE05OGl6UVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY01HMTVPekdFV2k1K0tKVm9nMFFPeDZvcFlWMFUxUTZSbEdhYmlwU25jWFJFcEJYUHhnamNQSHQ4WEg3N1JWemxLRnRubG04VFpUVkpFNjU4dXlrRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVjlHNU5XdzFNbUtaYWFrSWRZZVIwSXB3U092RGVQR1V2M20yYXJYNzFKOFVRNE9rc1lKRG0zVW1IWTIrMHJCS3F3M1c5RXBpdHdselJybU8wdXdTQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDg0NTkyNjYzNzQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA0ODMxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhaR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFpHLmpzb24iOiAie1wia2V5RGF0YVwiOlwicSt1eTJYd01UQVk3Y0FjSGtsYUtvYXRVcWZUMUJmZXg1SE5NL2UrS1k2Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTIyMDI4ODUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwNDM4MDk4MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
