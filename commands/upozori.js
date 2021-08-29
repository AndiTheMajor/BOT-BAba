module.exports = {
    name: 'upozori',
    description: "Ovo je _warn komanda.",
    execute(message, args) {
        let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Ne mozes koristiti tu komandu!")
        if (!dUser) return message.channel.send("Molim te taguj koga zelis da upozoris!")
        let dMessage = args.join(" ").slice(22);
        if (dMessage.length < 1) return message.reply('Molim te napisi razlog.')
    
        dUser.send(`${dUser}, Upravo ste upozoreni zbog ${dMessage} na serveru ${message.guild.name}`)
    
        message.channel.send(`${dUser} je upozoren zbog ${dMessage} `)
    }
}