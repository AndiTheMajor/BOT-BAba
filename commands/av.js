const discord = require('discord.js');

module.exports = {
    name: 'av',
    description: "Ovo je _av komanda.",
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
