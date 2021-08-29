module.exports = {
    name: 'pomoc-moderacija',
    description: "Ovo su embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#008141')
        .setTitle('Pomoc')
        .setDescription('Ove komande mozete koristiti')
        .addFields(
            {name: 'Za moderaciju', value: '_ban - `Koristite kako bi ste banovali membere sa servera`\n  \n  _obrisi - `koristite kako bi ste obirsali odredjeni broj poruka`\n \n _izbaci - `Koristite kako bi ste izbacili nekog clana sa servera`\n  \n _utisaj - `Koristite kako bi ste utisali odredjenu osobu na odredjen borj minuta ili dok ga ne unmute komandom`\n \n _unmute - `Koristite kako bi ste unmute odredjenu osobu`\n \n _upozori - `Koristite kako bi ste upozorili nekog clana`'}
        )
        .setImage()
        .setFooter('Uzivajte u mojim komandama');

        message.channel.send(newEmbed);
    }
}