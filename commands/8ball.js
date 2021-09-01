
const Discord = require('discord.js')

module.exports = {
name: '8ball',
description: "Ovo je _8ball komanda.",
async execute(message, args) {
if(!args[0]) return message.reply('Molim te napisi pitanje')
let replies = ["Da", "Ne", "Izgleda ok", "Naravno", "Definitivno", "Bolje da ti ne kazem", "Izgleda lose", "Nema sanse", "Samo danas", "Ne danas", "Nazalost da", "Nazalost ne", "Mozda", "Pitaj me kasnije"];

let question = args.slice(0).join(" ");
let result = replies[Math.floor(Math.random() * replies.length)];
let ballembed = new Discord.MessageEmbed()
.setAuthor(`8 ball`)
.setColor("RANDOM")
.addField("Question", question)
.addField("Answer", result)

message.channel.send(ballembed);
}
}
