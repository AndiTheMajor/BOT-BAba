const Discord = require('discord.js');

module.exports = {
    name: 'upozori',
    description: "Ovo je _warn komanda.",
    async execute(message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Nemas dozvolu da koristis ovu komandu');
        
        const warnRole1 = message.guild.roles.cache.find(role => role.name == '[Warnings: 1]');
        const warnRole2 = message.guild.roles.cache.find(role => role.name == '[Warnings: 1]');
        const warnRole3 = message.guild.roles.cache.find(role => role.name == '[Warnings: 1]');
    }
}