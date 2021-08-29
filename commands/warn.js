module.exports = {
    name: 'warn',
    description: "Ovo je _warn komanda.",
    execute(message, args) {
        let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!message.member.hasPermission("KICK_MEMBERSS")) return message.reply("Nemozes koristiti ovu komandu!")
        if (!dUser) return message.reply("Molim te taguj koga zelis da upozoris!")
        let dMessage = args.join(" ").slice(22);
        if (dMessage.length < 1) return message.reply('Molim te napisi razlog.')
    
        dUser.send(`${dUser}, Upravo si upozoren zbog ${dMessage} na serveru ${message.guild.name}`)
    
        message.channel.send(`${dUser} je upozoren zbog ${dMessage}`)
    }
}