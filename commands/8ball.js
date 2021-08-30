const Command = require('../../BOT-BA/commands');
const { execute } = require('./izbaci');

const Answers = [
    "da", "ne", "izgleda ok", "naravno", "definitivno", "bolje da ti ne kazem", "Izgleda lose", "nema sanse", "samo danas", "ne danas", "nazalost da", "nazalost ne", "mozda", "pitaj me kasnije"
];

module.exports = {
    name: '8ball',
    dexcription: 'Ovo je _8ball komanda',
    async execute(message, args){
        return message.reply(question.join(' ').endsWith('?')
            `${Answers[Math.floor(Math.random() * Answers.length)]}`
            `To nije pitanje (Stavi "?")`)
    }
}