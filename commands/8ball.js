const { execute } = require("./izbaci");

module.exports = {
    name: "8ball",
    description: "Ovo je _8ball komanda",
    async execute(message, args){
        if(!args[0]) return message.reply('Molim te napisi pitanje');
        let answers = [
            'As I see it, yes.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            `Don't count on it.`,
            `It is certain.`,
            `It is decidedly so.`,
            `Most likely.`,
            `My reply is no.`,
            `My sources say no.`,
            `Outlook not so good.`,
            `Outlook good.`,
            `Reply hazy, try again.`,
            `Signs point to yes.`,
            `Very doubtful.`,
            `Without a doubt.`,
            `Yes.`,
            `Yes - definitely.`,
            `You may rely on it.`
        ] // This array holds the 20 original answers that was found on the icosahedron dice inside the magic 8 ball !
        const BallNumber = Math.floor(Math.random() * answers.length); // We have to select a number that ranges in from 0 to the number of elements in the answers arra

        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`8ball`)
        .addField(`Pitanje: ${dMessage}`)
        .addField("Odgovor", answers[answers])
        
        message.channel.send(newEmbed);

    }
}
