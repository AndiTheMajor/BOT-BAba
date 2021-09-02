module.exports = {
    name: 'pomoc-zabava',
    description: "Ovo su embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc5c')
        .setTitle('Pomoc')
        .setDescription('Ove komande mozete koristiti')
        .addFields(
            {name: 'Za zababavu', value: '8ball - `Postavi pitanje sveznajucoj kugli`\n\n av/avatar - `Koristite da bi ste videli neciju profilnu (tagujte tu osobu)`\n\n _gej - `koristite da bi ste videli koliko je neka osoba gej (tagujte tu osobu)`\n\n _mim - `Koristite kako bi ste pogledali mimove`\n\n _penis - `Pogledajte da bi ste videli koliki penis ima neka osoba (tagujte tu osobu)` Predlozio: Ardalic#8464 \n\n _ping `Svi znamo sta ce se desiti`\n\n _simp - `Koristite da bi ste videli koliko je neko simp (tagujte tu osobu)`'}
        )
        .setImage()
        .setFooter('Uzivajte u mojim komandama');

        message.channel.send(newEmbed);
    }
}
 
//8ball av/avatar gej mim penis ping simp