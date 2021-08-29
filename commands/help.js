module.exports = {
    name: 'help',
    description: "Ovo je _help komanda.",
    execute(message, args) {
        message.reply('` Komande za zabavu su: _fanboy,_pedo,_ping.`');
        message.channel.send('`A za moderaciju su: _ban,_clear,_kick,_mute,_unmute,_warn.`')
    }
}