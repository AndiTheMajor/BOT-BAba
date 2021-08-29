module.exports = {
    name: 'pomoc',
    description: "Ovo su embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#40E0D0')
        .setTitle('Pomoc')
        .setDescription('Ove komande mozete koristiti')
        .addFields(
            {name: 'Pomoc', value: 'Koristite `_pomoc-zabava` da bi ste videli komande za zabavu\n \n Koristite `_pomoc-moderacija` da bi ste videli komande za moderaciju'}
        )
        .setImage()
        .setFooter('Uzivajte u mojim komandama');

        message.channel.send(newEmbed);
    }
}