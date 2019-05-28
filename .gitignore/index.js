const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "|"
 
client.login("NTgyMjYzMTU2OTcwMzU2NzY2.XO25Bg.2Nlk7tPTZy2KIUNbKDn3imMOrlo")
 
client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("|help")
});
