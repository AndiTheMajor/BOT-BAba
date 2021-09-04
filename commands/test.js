// at the top of your file
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: "Ovo je _ping komanda.",
    execute(message, args) {
        // inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Test komanda')
.setURL('https://discord.js.org/')
.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
.setDescription('Ovo je embed test')
.setThumbnail('https://i.imgur.com/AfFp7pu.png')
.addFields(
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
)
.addField('Inline field title', 'Some value here', true)
.setImage('https://i.imgur.com/AfFp7pu.png')
.setTimestamp()
.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

channel.send({ embeds: [exampleEmbed] });
    }
}
