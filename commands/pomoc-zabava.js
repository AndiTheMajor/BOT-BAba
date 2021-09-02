module.exports = {
    name: 'pomoc-zabava',
    description: "Ovo su embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc5c')
        .setTitle('Pomoc')
        .setDescription('Ove komande mozete koristiti')
        .addFields(
            {name: 'Za zababavu', value: '8ball - `Postavi pitanje sveznajucoj kugli`'}
        )
        .setImage()
        .setFooter('Uzivajte u mojim komandama');

        message.channel.send(newEmbed);
    }
}
 
//8ball av/avatar gej mim penis ping simp