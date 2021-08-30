const {MessageEmbed} = require('discord.js');

module.exports = {
    name: '8ball',
     execute: async (bot, message, args, Discord)  => {
        const answers = [
            'Izvesno je', 'Bez sumnje', 'Definitivno', 'Koliko ja vidim,da', 'Verovatno', 'Da', 'Pitaj me kasnije', 'Bolje da ti ne kazem', 'Nemogu predvideti to', 'Pitaj me ponovo', 'Ne racunaj na to', 'Moj odgovor je ne', 'Moji izvori kazu ne', 'Sumnjam', 'Nikada'
       ];
       const a = answers[Math.floor(Math.random() * answers.length)];

      return message.reply(
           new MessageEmbed()
                .setAuthor('8ball')
                .setDescription(
                    `Pitanje: ${args.join(' ')}\n\n Odgovor: ${a}`
                )
                .setColor('RANDOM')
       );
    }
}
