const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Cateva lucruri despre mine' 
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("Viata lui Raduq")
            .addField("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", "Viata mea a inceput in anul 2001, inca de pe vremea aceea imi placea sa prind tepari")
            .addField("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", "Mama era o tepara pur-sange, imi dadea tepe mereu..fmm femeie neserioasa")
            .addField("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", "Dar acum, m-am facut mare si vreau sa scap lumea de tepari!")
            .setColor(0xFF0000)
            .setFooter("Aceasta este povestea vietii mele. Va pupa fratele!")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand; 
