const { DiscordAPIError } = require("discord.js");
const { execute } = require("./8ball")

module.exports = {
    name: 'test',
    description: "Ovo je _ping komanda.",
    async execute(message, args) {
        let replies = ['8D','8=D','8==D','8===D','8====D','8=====D','8======D','8=======D']

        let result = replies[Math.floor(Math.random() * replies.length)];
        let ppembed = new Discord.MessageEmbed()
        .setAuthor(`PP masina`)
        .setColor("RANDOM")
        .addField("Tvoj penis", result)

        message.channel.send(ppembed);
     }   
} 