module.exports = {
    name: 'pomoc-zabava',
    description: "Ovo su embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffcc5c')
        .setTitle('Pomoc')
        .setDescription('Ove komande mozete koristiti')
        .addFields(
            {name: 'Za zababavu', value: '_av/_avatar - `koristi se da bi ste prikazali neciju profilnu`\n \n _penis - `Koristite kako bi ste videli velicinu svog penisa`\n\n _gej - `Koristite da bi ste videli koliko ste vi ili neko gej`\n \n _simp - `Koristite da bi ste videli koliko ste vi ili neko simp`\n \n _8ball - `Koristi kako bi sveznajucoj kugli postavio pitanje.`\n\n_fanboy - `koristi se da bi ste videli koga Apeks fanboya`\n  \n _mim - `koristi se da bi ste pogledali zanimljive mimove`\n \n _pedo - `korsit se da bi ste videli ko je pedo na ovom serveru`\n  \n _ping - `svi znamo sta ce se desiti ;)`'}
        )
        .setImage()
        .setFooter('Uzivajte u mojim komandama');

        message.channel.send(newEmbed);
    }
}