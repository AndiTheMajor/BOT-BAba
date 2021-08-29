module.exports = {
    name: 'clear',
    description: "Ovo je _clear komanda",
    async execute(message, args) {
        if (message.member.permissions.has("KICK_MEMBERS")) {
            if (!args[0]) return message.reply("Molim te unesi broj");

            if (isNaN(args[0])) return message.reply("Molim te napisi pravi broj!");

            if (args[0] > 100) return message.reply("Maksimalan broj poruka je 100!");

            if (args[0] < 1) return message.reply("Minimalan broj je 1!")

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
                message.channel.send(" **Uspesno obrisano " + "`" + args[0] + " messages`**")
                    .then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
            });
        } else {
            message.reply("Nemas dozvolu da koristis ovu komandu!");
        }
    }
}