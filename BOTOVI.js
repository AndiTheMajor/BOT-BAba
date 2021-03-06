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
    if(command === "8ball"){
        client.commands.get("8ball").execute(message, args);
    }
    if(command === "penis"){
        client.commands.get("penis").execute(message, args, Discord);
    }
});

client.login(process.env.token);
