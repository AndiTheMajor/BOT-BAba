const Discord = require('discord.js')

module.exports = {
    name: '8ball',
    description: "Ovo je _8ball komanda.",
    async execute(message, args) {
        if(!args[0]) return message.reply('Molim te napisi pitanje')
        let replies = ["da", "ne", "izgleda ok", "naravno", "definitivno", "bolje da ti ne kazem", "Izgleda lose", "nema sanse", "samo danas", "ne danas", "nazalost da", "nazalost ne", "mozda", "pitaj me kasnije"];

        let question = args.slice().join(" ");
        let result = Math.floor((Math.random() * replies.lenght));
        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`8 ball`)
        .setColor("#1C1C1C")
        .addField("Question", question)
        .addField("Answer", replies[replies])

        message.channel.send(ballembed);
    }
}