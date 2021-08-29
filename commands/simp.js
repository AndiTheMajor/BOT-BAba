const Discord = require("discord.js")

module.exports = {
    name: 'simp',
    description: "Ovo je _simp komanda.",
    async execute(message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const simpembed = new Discord.MessageEmbed()
        .setTitle(`Simp masina`)
        .setDescription(`${member.username} je ` + rng + "% simp <3")
        .setColor("#884c9a")

        message.channel.send(simpembed);

    }
}