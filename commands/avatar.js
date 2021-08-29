const discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: "Ovo je _avatar komanda.",
    execute(message, args) {
            if(message.mentions.users.size){
                let member = message.mentions.members.first();
            if(member){
                const emb = new discord.MessageEmbed().setImage(member.user.displayAvatarURL()).setTitle(member.user.username);
                message.channel.send(emb);
                                  
            }
            }else{
                const emb = new discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
                message.channel.send(emb);    
        }
    
    }
} 