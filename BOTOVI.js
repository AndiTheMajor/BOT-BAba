const Discord = require('discord.js');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true
});

const client = new Discord.Client();

const prefix = '_';
 
const fs = require('fs');
const { execute } = require('./commands/izbaci');
 
client.commands = new Discord.Collection();

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
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
    if(command == '8ball'){
        client.commands.get('8ball').execute(message, args);
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
});

mongoose.connect(process.env.MONGODB_SRV, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Povezan na db');
})

client.login(process.env.token);