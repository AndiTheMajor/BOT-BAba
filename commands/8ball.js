.setDescription('Koje komande mozete koristiti')
.addFields(
    {name: 'Za zabavu', value: '_fanboy,_pedo,_ping,_avatar/_av,_meme!'},
    {name: 'Za moderaciju', value: '_ban,_clear,_kick,_mute,_unmute,_warn!'},
    
)
.setImage()
.setFooter();

message.channel.send(newEmbed);
}
}


















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
.addField("Answer", replies[result])

message.channel.send(ballembed);
}
}