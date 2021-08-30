const Command = require('/app/commands/8ball.js');

const answers = [
    "da", "ne", "izgleda ok", "naravno", "definitivno", "bolje da ti ne kazem", "Izgleda lose", "nema sanse", "samo danas", "ne danas", "nazalost da", "nazalost ne", "mozda", "pitaj me kasnije"
];

module.exports = {
    name: '8ball',
    
    async run(msg, ...question) {
        return msg.reply(question.join(' ').endsWith('?') ?
        `${answers[Math.floor(Math.random() * answers.length)]}` :
        'Do nije ptanje,molim te stavi "?" na kraju recebuce');
    }

};