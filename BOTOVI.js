const Discord = require('discord.js');

const client = new Discord.Client();






const welcome = require('./welcome')
const prefix = '_';


 
const fs = require('fs');
const { execute } = require('./commands/izbaci');
 
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}  
    
client.once('ready', async () => {
    console.log('Andrijica is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
   
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'test'){
        client.commands.get('test').execute(message, args, Discord);
    }
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args,);
    }  
    if(command === 'obrisi'){
        client.commands.get('obrisi').execute(message, args);
    }
    if(command === 'pedo'){
        client.commands.get('pedo').execute(message, args);
    }
    if(command === 'fanboy'){
        client.commands.get('fanboy').execute(message, args);
    }
    if(command === 'pomoc'){
        client.commands.get('pomoc').execute(message, args, Discord);
    }
    if(command === 'izbaci'){
        client.commands.get('izbaci').execute(message, args);
    }
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    if(command === 'utisaj'){
        client.commands.get('utisaj').execute(message, args);
    }
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    if(command === 'infractions'){
        client.commands.get('infractions').execute(message, args);
    }
    if(command === 'upozori'){
        client.commands.get('upozori').execute(message, args);
    }
    if(command == 'avatar'){
        client.commands.get('avatar').execute(message, args);
    }
    if(command == 'av'){
        client.commands.get('av').execute(message, args);
    }
    if(command == 'mim'){
        client.commands.get('mim').execute(message, args);
    }
    if(command === "pomoc-zabava"){
        client.commands.get("pomoc-zabava").execute(message, args, Discord);
    }
    if(command === "pomoc-moderacija"){
        client.commands.get("pomoc-moderacija").execute(message, args, Discord);
    }
    if(command == 'gej'){
        client.commands.get('gej').execute(message, args);
    }
    if(command === "simp"){
        client.commands.get("simp").execute(message, args);
    }
    if(command === "warns"){
        client.commands.get("warns").execute(message, args);
    }
    if(command === "8ball"){
        client.commands.get("8ball").execute(message, args);
    }
    if(command === "penis"){
        client.commands.get("penis").execute(message, args, Discord);
    }
    if(command === 'vesanje'){
        client.commands.get('vesanje').execute(message, args);
    }
});

client.login(process.env.token);




var usage = "`!hangman <channel id> <your phrase>`\n`Example: !hangman 368845035560763402 grandest nan is the man`";
var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var games = [];

var stages = [`\`\`\`
/---|
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   o
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   o ~ thanks
|  /|\\
|  / \\
|
\`\`\`
`];

client.on('ready', () => {
    client.user.setStatus("_hangman");
  console.log(`Logged in as ${client.user.tag}!`);
});

function generateMessage(phrase, guesses) {
	var s = "";
	for(var i = 0; i < phrase.length; i++) {
		if(phrase[i] == ' ')
			s += " ";
		else {
			var c = phrase[i];
			if(guesses.indexOf(c) == -1)
				c = "\\_";
			s += "__" + c + "__ ";
		}
	}
	return s;
}

function nextLetter(message, index, word) {
    message.react(letters[index]).then(r => {
		index++;
		if(index < letters.length) {
			if(index == 13) {
				message.channel.send(generateMessage(word, [])).then(m => {
					games.push({
						stage: 0,
						msg0: message,
						msg1: m,
						phrase: word,
						guesses: []
					});
					nextLetter(m, index);
				});
			} else {
				nextLetter(message, index, word);
			}
		}
	});
}

client.on('messageReactionAdd', (reaction, user) => {
	var msg = reaction.message;
	if(!user.bot) {
		for(var i = 0; i < games.length; i++) {
			var game = games[i];
			if((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
				var letter = unicode[letters.indexOf(reaction.emoji.name)];
				
				reaction.fetchUsers().then(usrs => {
					var reactors = usrs.array();
					var remove_next = function(index) {
						if(index < reactors.length)
							reaction.remove(reactors[index]).then(() => remove_next(index + 1));
					};
					
					remove_next(0);
				});
				
				if(game.guesses.indexOf(letter) == -1) {
					game.guesses.push(letter);
					if(game.phrase.indexOf(letter) == -1) {
						game.stage ++;
						game.msg0.edit(stages[game.stage]);
					} else {
						var sik = true;
						for(var j = 0; j < game.phrase.length; j++) {
							var c = game.phrase[j];
							if(c != ' ' && game.guesses.indexOf(c) == -1) {
								sik = false;
							}
						}
						
						if(sik) {
							game.msg0.edit(stages[game.stage].replace("o", "o ~ ur alright.. for now"));
						}
						
						game.msg1.edit(generateMessage(game.phrase, game.guesses));
					}
				}
			}
			games[i] = game;
		}
	}
});

client.on('message', msg => {
    if(msg.content.startsWith("!hangman")) {
        var words = msg.content.split('\n')[0].split(' ');
        if(words.length < 2) {
            msg.reply(usage);
        } else {
            var channel = client.channels.cache.find(ch => ch.id == words[1]);
			var word = words.slice(2).join(' ').toLowerCase().replace(/[^a-z\s:]/g, '');
            if(channel != null) {
                channel.send(stages[0]).then(m => {
                    nextLetter(m, 0, word);
                });
            } else {
                msg.reply("No channel with the id `" + words[1] + "` exist! \n" + usage);
            }
        }
    }
});

