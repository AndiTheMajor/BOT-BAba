const Discord = require("discord.js")

module.exports = {
    name: 'gej',
    description: "Ovo je _gej komanda.",
    async execute(message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const gejembed = new Discord.MessageEmbed()
        .setTitle(`Gej masina`)
        .setDescription(`${member.username} je ` + rng + "% gej")
        .setColor("#ff0000")

        message.channel.send(gejembed);

    }
}