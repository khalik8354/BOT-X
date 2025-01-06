 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
//═══════[Required Variables]════════\\
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ms.excelamadi@yahoo.com";
global.location = "Rivers,Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Excelsama/BOT-X";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.website = process.env.GURL || " https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/jTJDVYj/Leonardo-Phoenix-A-vibrant-animestyle-illustration-of-a-young-2.jpg";
global.devs = "2347045035241","233268374753";
global.sudo = process.env.SUDO || "2347045035241","233268374753";
global.owner = process.env.OWNER_NUMBER || "2347045035241","233268374753";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0plL28zVmNoTnY3NGtUZGdwdWF2cHlhVkhSZkRkVFhiYU12bDB3QjUyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0dHSkl5VzBDMWt3N2dqN3JlNDRac3BLdkdxcElyWG9TVXR1dHA3Ym0xQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TGs4ZE1ZR1NTaFk5Z1p5enZjaU5JdUltVEdGUUhTVHRxaU1QWFJMYmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnOU1VRVVhR3FvVnpTSzBDWUVrNWtDZ3JrbGY4c2FZRXA2QWVtZXR4OEcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJN2UzeFhyMVlFdFRTai9DQU1IZU9yNk8ycG9mSXJTVWRLY3JMRHdzSFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii90Nk8rbERaU0Zyb3NFUW93MUtubmFCVDJkUld5cFRNRjNLbG52eFI2Mnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFTczd5MVowQ05DcjRZamtqVkxqNkYxd2syTXlaQlN2d2lIK3AwdzBIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWkyeDBsR2l0UjdHZ3M2VHY4UlFBUDk3MUxHaE5ybGN1YVBOVWdDMngxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhY3lUYW5XdUllUWs0bkl3T1U5M3kzTWtWRldXMEZ5bnlKaUpJMDYwYmoxYlpZVG0yWGFqVENYVFgzRjBpaG1pdnFyRFFRb1pKdGZLK2hybGtQQkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJxRUQ3ZTFWMXpHNGVtUzJ0RjdNZDM3WXpFS0xjNDlCYmhQelM2UG8yMStvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwODI3MjY0NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3RkJFNkUwODZGQkM2QUNCQUUwOUE3OURDQTc2QkM4NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2MTI1MzUyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJTzg4NzFqOFR6S1hDelQwdVNsM2V3IiwicGhvbmVJZCI6IjQzNDBhMjllLThkOGQtNDljZC1iZDkyLTY0NDQ0NjZkMDEyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZbDQwOTAzdVNFWnI2SEp1M1RKRyt3YW1kVFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHhYUEs2QVZDUXhESFV2c2NET2duWCtJN3FzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJZU0U4NkwzIiwibWUiOnsiaWQiOiIyNTQ3MDgyNzI2NDQ6NTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ttam9PRURFSmZYN0xzR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNoRSt3YjRPSEdvNkhBQXQ5L0F1cHQwUThhS0lnMVVUSDlwN0hWWjVXd2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNqcEpOMW84SnlOcG00bTJTeTN1dy9OYU1aN0IwcVJKWXJPYTZZOExUQ1JxOGlIM1hsMVc4Z3kvU1pmTUl6c3BrT3p6d0hxQ3RMMWVlUjY3NlI1NkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlcTlRbkNBOGpNWXVCZ2JMc1c0bFZ3YVVBUTZpbWZDRTJDc1p6NjZDNUZWS2JHOEpSYXdjQU5HQktiL1ptZGxzNlpnOGI3MW9NL0p5RXNLV3lhc1BEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwODI3MjY0NDo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSVJQc0crRGh4cU9od0FMZmZ3THFiZEVQR2lpSU5WRXgvYWV4MVdlVnNJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MTI1MzQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1RYyJ9 " // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BOT-X ™`",
  author: process.env.PACK_AUTHER || "Xcelsama",
  packname: process.env.PACK_NAME || "BOT-X",
  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || "Xcelsama",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.UI|| "BOT-X.UI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
