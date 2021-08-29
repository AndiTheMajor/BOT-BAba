const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Ovo je _mute komanda",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (message.member.permissions.has("BAN_MEMBERS")) {
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> je utisan`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> je utisan na ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.reply('Molim te taguj koga hoces da utisas.');
            }
        }
    }
}