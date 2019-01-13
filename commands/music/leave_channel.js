const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel of the commander' 
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnnection.disconnect();
        }
        else
        {
            message.reply("Trebuie sa fiu intr-un voice channel ca sa am de unde sa ies");
        }

    }
}   

module.exports = LeaveChannelCommand;
