
const Discord = require('discord.js')

module.exports = {
name: '8ball',
description: "Ovo je _8ball komanda.",
async execute(message, args) {
if(!args[0]) return message.reply('Molim te napisi pitanje')
let replies = ["da", "ne", "izgleda ok", "naravno", "definitivno", "bolje da ti ne kazem", "Izgleda lose", "nema sanse", "samo danas", "ne danas", "nazalost da", "nazalost ne", "mozda", "pitaj me kasnije"];

let question = args.slice(0).join(" ");
let result = replies[Math.floor(Math.random() * replies.length)];
let ballembed = new Discord.MessageEmbed()
.setAuthor(`8 ball`)
.setColor("#1C1C1C")
.addField("Question", question)
.addField("Answer", result)

message.channel.send(ballembed[replies]);
}
}
