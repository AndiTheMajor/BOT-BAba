const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'Ovo je _8ball command',
    async execute (bot, message, args){
        if(!args[0]) return message.reply('Molim te postavi pitanje')
        let replies = [    'As I see it, yes.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        `Don't count on it.`,
        `It is certain.`,
        `It is decidedly so.`,
        `Most likely.`,
        `My reply is no.`,
        `My sources say no.`,
        `Outlook not so good.`,
        `Outlook good.`,
        `Reply hazy, try again.`,
        `Signs point to yes.`,
        `Very doubtful.`,
        `Without a doubt.`,
        `Yes.`,
        `Yes - definitely.`,
        `You may rely on it.`]
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");
        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`)
        .setColor('RANDOM')
        .addField("Answer", replies[result])
        message.channel.send(ballembed)
    }
}