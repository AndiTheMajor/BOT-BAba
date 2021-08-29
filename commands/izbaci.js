module.exports = {
    name: 'izbaci',
    description: "Ovo je _kick komanda.",
    execute(message, args) {
        const member = message.mentions.members.first();

        if (message.member.permissions.has("KICK_MEMBERS")) {
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`Clan je kikan`);
            }else{
                message.reply('Molim te taguj koga zelis da kick');
            }
        }
    }
}