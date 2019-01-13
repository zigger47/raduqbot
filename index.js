const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTMzMzg3Mjg3ODk1OTk4NDk0.Dxq1Eg.2mKVniiRLzN_RhmJgF43eVB8QL0'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 're')
    {
        message.reply('te pupa fratele!');
    }
});








bot.on("guildMemberAdd", function(member)
{
    member.send("Salut frate hai sa prindem teparu!");
    let memberRole = member.guild.roles.find("name", "DIICOT");
    member.addRole(memberRole);
});

bot.on('ready', function(){
    console.log("Sunt gata sa prind tepari");
    bot.user.setPresence({
        game: { 
            name: 'teparii de pe B-Hood',
            type: 'WATCHING'
        },
        status: 'idle'
    })
})




bot.on('error', console.error)

bot.login(TOKEN);