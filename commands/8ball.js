const { execute } = require('./izbaci');
const Command = require('/app/commands/8ball.js');

const answers = [
    "da", "ne", "izgleda ok", "naravno", "definitivno", "bolje da ti ne kazem", "Izgleda lose", "nema sanse", "samo danas", "ne danas", "nazalost da", "nazalost ne", "mozda", "pitaj me kasnije"
];

module.exports = {
    name: '8ball',

    async execute(msg, ...question) {
        return msg.reply(question.join(' ').endsWith('?') ?
        `${answers[Math.floor(Math.random() * answers.length)]}` :
        'To nije ptanje,molim te stavi "?" na kraju recenice.');
    }

};