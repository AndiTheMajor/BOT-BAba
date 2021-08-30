const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "8ball",
    description: "Ovo je _8ball komanda",
    run: async(client, message, args) => {
        let question = args.join(" ")
        if(question) return message.reply("Molim te postavi pitanje")
        let responses = [
            "da", "ne", "izgleda ok", "naravno", "definitivno", "bolje da ti ne kazem", "Izgleda lose", "nema sanse", "samo danas", "ne danas", "nazalost da", "nazalost ne", "mozda", "pitaj me kasnije"
        ]
        let response = responses[Math.floor(Math.random() * responses.length)]
        let embed = new MessageEmbed()
        .setTitle("8ball")
        .setDescription(`Pitanje - **${question}** \n\n Odgovor - **${response}** `)
        message.channel.send(embed)
    }
}
//join