require('dotenv').config();
//console.log(process.env.TOKEN); //bot-token

const regex = new RegExp(/(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)[^\s]+/gim);


const { Client } = require('discord.js');
const client = new Client({
    partials:['MESSAGE', 'REACTION']
    });

const PREFIX = "?";
const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');
const ms = require('ms');






client.on('ready',()=>{
console.log(`Logged in as ${client.user.tag}`)
});



client.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setTitle('Welcome!')
        .setDescription(`Everyone welcome ${member}!`)
        .setTimestamp()
        .setImage(member.user.displayAvatarURL({dynamic: true, size: 2048}));
        member.guild.channels.cache.get('757354562741993572').send(embed);
})




////////////////////////Logs//////////////////////////////////////////////////////////////////////////////////
client.on('message', (message) => {
    console.log(`${message.author.tag} sent '${message.content}'`);

});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////




client.on('message', async (message)=>{


    const Phaukat =  message.guild.roles.cache.find(role=>role.name==="Phaukat");
    const Test =  message.guild.roles.cache.find(role=>role.name==="Sexual Assault Victim");
    const Sasta =  message.guild.roles.cache.find(role=>role.name==="Sasta");
    const Muted = message.guild.roles.cache.find(role=>role.name==="Muted");
    const DPS = message.guild.roles.cache.find(role=>role.name==="DPS");



    
    if(message.content.bot) return;
    if(message.content.startsWith(PREFIX)){
        const [cmd, ...args] = message.content.trim().substring(PREFIX.length).split(/\s+/);
        if(cmd==='kick'){
            message.delete();
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have kick permissions!').then(message => {message.delete({ timeout: 3000 })});
            if(args.length===0) return message.reply('Please provide an ID');
            if(args[0].startsWith("<")){
                    args[0] = message.mentions.members.first().id;
                    const member = message.guild.members.cache.get(args[0]);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Get Rekt!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`${member} has been kicked!`)
                    .setThumbnail("https://cdn.discordapp.com/emojis/755408963285286913.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("KEK")
                    .setTimestamp()
                if(member){
                    member.kick().then((member)=>message.channel.send(embed)).catch((err)=>message.console.log("Insufficient permissions!"));
                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);
                }
            }
            
            else {
                const member = message.guild.members.cache.get(args[0]);
                var embed = new Discord.MessageEmbed()
                .setTitle("Get Rekt!")
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setDescription(`${member} has been kicked!`)
                .setThumbnail("https://cdn.discordapp.com/emojis/755408963285286913.gif?v=1")
                .addField("By: ", message.author, true)
                .setFooter("KEK")
                if(member){
                    member.kick().then((member)=>message.channel.send(embed)).catch((err)=>message.console.log("Insufficient permissions!"));
                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    message.channel.send(embed);               
                 }
            }

        }

        else if(cmd==='ban'){
            message.delete();
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have ban permissions!').then(message => {message.delete({ timeout: 3000 })});
            if(args.length===0) return message.reply('Please provide an ID');
            if(args[0].startsWith("<")){
                args[0] = message.mentions.members.first().id;
                try{
                    const user = await message.guild.members.ban(args[0]);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Get Rekt!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`User has been banned!`)
                    .setThumbnail("https://cdn.discordapp.com/emojis/755408963285286913.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("KEK")
                    .setTimestamp()
                    message.channel.send(embed);      

                } catch(err) {
                    console.log(err);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Error!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);

                }

            } 
            else{
                try{
                    const user = await message.guild.members.ban(args[0]);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Get Rekt!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`User has been banned!`)
                    .setThumbnail("https://cdn.discordapp.com/emojis/755408963285286913.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("KEK")
                    .setTimestamp()
                    message.channel.send(embed);      


                } catch(err) {
                    console.log(err);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Error!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);      
              }
            }
        }



        else if(cmd==='mute'){
            message.delete();
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have mute permissions!').then(message => {message.delete({ timeout: 3000 })});
            if(args.length===0) return (await message.reply('Please mention the user')).then(message=>{message.delete({timeout:3000})});
            if(!args[1]) return (await message.reply('Please mention duration!')).then(message=>{message.delete({timeout:3000})});
            time = ms(args[1]);
            if(args[0].startsWith("<")){
                args[0] = message.mentions.members.first().id;
                    const member = message.guild.members.cache.get(args[0]);
                if(member){
                    member.roles.add(Muted.id);
                    member.roles.remove(Phaukat.id);
                    member.roles.remove(Sasta.id);
                    member.roles.remove(DPS.id);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Get Rekt!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`${member} has been muted for ${ms(time)}`)
                    .setThumbnail("https://cdn.discordapp.com/emojis/755408963285286913.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("KEK")
                    .setTimestamp()
                    message.channel.send(embed);

                    setTimeout(function(){
                        member.roles.add(Phaukat.id);
                        member.roles.remove(Muted.id);
                        var embed = new Discord.MessageEmbed()
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTitle(`Welcome back fag`)
                        .setDescription(`${member} was unmuted!`)
                        .setImage(member.avatarURL)
                        .setFooter("Dont fuck up again!")
                        .setTimestamp();
                        message.channel.send(embed);

                        
                    }, time);


                    
                }
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);                      
                }
            }
            
            else {
                const member = message.guild.members.cache.get(args[0]);
                if(member){
                    member.roles.add(Muted.id);
                    member.roles.remove(Phaukat.id);
                    member.roles.remove(Sasta.id);
                    member.roles.remove(DPS.id);
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Get Rekt!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(`${member} has been muted!`)
                    .setThumbnail("https://media.discordapp.net/attachments/731614861301252107/747862950097977525/a_985713092df32da3a7af0fd605e83e6d.gif")
                    .addField("By: ", message.author, true)
                    .setFooter("KEK")
                    .setTimestamp()
                    message.channel.send(embed);

                    setTimeout(function(){
                        member.roles.add(Phaukat.id);
                        member.roles.remove(Muted.id);
                        var embed = new Discord.MessageEmbed()
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTitle(`Welcome back fag`)
                        .setDescription(`${member} was unmuted!`)
                        .setImage(`${member.avatar.avatarURL()}`)
                        .setFooter("Dont fuck up again!")
                        .setTimestamp();
                        message.channel.send(embed);

                        
                    }, time);

                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);      
                }
            }
         }

 /////////////////////////////////////////////////Roles//////////////////////////////////////////////////////////////       

        else if(cmd==='gr'){
            if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('You dont have Manage Roles permissions!');
            if(args.length===0) return message.reply('Please provide an ID');
            if(args[0].startsWith("<")){
                args[0] = message.mentions.members.first().id;
                    const member = message.guild.members.cache.get(args[0]);
                if(member){
                    switch(args[1]){
                        case 'p':
                            member.roles.add(Phaukat.id);
                            break;
                        case 's':
                            member.roles.add(Sasta.id);
                            break;
                        case 'test':
                            member.roles.add(Test.id);
                            break;
                        case 'dps' :
                            member.roles.add(DPS.id);
                            break;
                    }
                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);      
                }
            }
            
            else {
                const member = message.guild.members.cache.get(args[0]);
                if(member){
                    switch(args[1]){
                        case 'p':
                            member.roles.add(Phaukat.id);
                            break;
                        case 's':
                            member.roles.add(Sasta.id);
                            break;
                        case 'test':
                            member.roles.add(Test.id);
                            break;
                        case 'dps' :
                                member.roles.add(DPS.id);
                                break;
                    }

                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);      
                }
            }

        }


        else if(cmd==='rr'){
            if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('You dont have Manage Roles permissions!');
            if(args.length===0) return message.reply('Please provide an ID');
            if(args[0].startsWith("<")){
                args[0] = message.mentions.members.first().id;
                    const member = message.guild.members.cache.get(args[0]);
                if(member){
                    switch(args[1]){
                        case 'p':
                            member.roles.remove(Phaukat.id);
                            break;
                        case 's':
                            member.roles.remove(Sasta.id);
                            break;
                        case 'test':
                            member.roles.remove(Test.id);
                            break;
                            case 'dps' :
                                member.roles.remove(DPS.id);
                                break;
                    }
                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);      
                }
            }
            
            else {
                const member = message.guild.members.cache.get(args[0]);
                if(member){
                    switch(args[1]){
                        case 'p':
                            member.roles.remove(Phaukat.id);
                            break;
                        case 's':
                            member.roles.remove(Sasta.id);
                            break;
                        case 'test':
                            member.roles.remove(Test.id);
                            break;
                            case 'dps' :
                                member.roles.remove(DPS.id);
                                break;
                    }

                } 
                else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("WTF!")
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription('Member not found in guild!')
                    .setThumbnail("https://cdn.discordapp.com/emojis/584315484233662465.gif?v=1")
                    .addField("By: ", message.author, true)
                    .setFooter("Oof")
                    .setTimestamp()
                    message.channel.send(embed);      
                }
            }

        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////purge/////////////////////////////////////////////////////////////////

        else if(cmd==='purge'){
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have purge permissions!').then(message => {message.delete({ timeout: 3000 })});
            if(args.length===0) return message.reply('Provide integer argument!');
            message.channel.bulkDelete(args[0],true);
            console.log(`${args[0]} messages have been cleared!`);
                }
            
        else if(cmd === 'ping') {
            message.delete();
                    message.channel.send("Pinging...").then(m =>{
                        var ping = m.createdTimestamp - message.createdTimestamp;
                        var embed = new Discord.MessageEmbed()
                        .setAuthor(`Pong! Your Ping Is:-\n 🏓 ${ping}ms`)
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setFooter(`${message.author.tag} pinged`)
                        .setTimestamp();
                        m.edit(embed)
                  });
              }


        else if(cmd==='pfp'){              
                message.delete();
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have pfp permissions!').then(message => {message.delete({ timeout: 3000 })});
                if(args.length===0) return message.reply('Mention someone!').then(message => {message.delete({ timeout: 3000 })});
                if(args[0].startsWith("<")){
                    args[0] = message.mentions.members.first().id;
                    client.users.fetch(args[0]).then(myUser => {
                        const embed = new Discord.MessageEmbed()
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTitle(`Profile Pic fetch`)
                        .setDescription(`Successfully fetched ${myUser}'s pfp`)
                        .setImage(myUser.displayAvatarURL({dynamic: true, size: 2048}))
                        .setTimestamp()
                        .setFooter(`Fetched by ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true, size: 2048})}`);
                        message.channel.send(embed);

                            });

                    
    
            }
                else {
                    client.users.fetch(args[0]).then(myUser => {
                        message.delete();
                        const embed = new Discord.MessageEmbed()
                        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                        .setTitle(`Profile Pic fetch`)
                        .setDescription(`Successfully fetched ${myUser}'s pfp`)
                        .setImage(myUser.displayAvatarURL({dynamic: true, size: 2048}))
                        .setTimestamp()
                        .setFooter(`Fetched by ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true, size: 2048})}`);
                        message.channel.send(embed);

                            });
    
                }

        }
        else if(cmd==="dp"){
                var embed = new Discord.MessageEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle('Profile Pic fetch')
                .setAuthor(`${message.author.tag}`, `${message.author.avatarURL()}`, 'https://youtu.be/dQw4w9WgXcQ')
                .setDescription(`Successfully fetched ${message.author}'s dp`)
                .setImage(`${message.author.displayAvatarURL({dynamic: true, size: 2048})}`)
                .setTimestamp()
                .setFooter(`${message.author.tag} fetched his/her dp`,`${message.author.displayAvatarURL({dynamic: true, size: 2048})}`);
                message.channel.send(embed);
                message.delete();


        }

        else if(cmd==="req"){
            if(!args) return message.reply('Provide description!').then(message => {message.delete({ timeout: 3000 })});
                var embed = new Discord.MessageEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle('Request')
                .setAuthor(`${message.author.tag} Requested....`)
                .setDescription(args)
                .setTimestamp()
                .setFooter(`${message.author.tag} requested something`,`${message.author.displayAvatarURL()}`);
                message.guild.channels.cache.get('757605683368689775').send(embed);


        }

        else if(cmd==='vibe') {
            if(!message.author.bot){
                var embed = new Discord.MessageEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle(`Vibin'`)
                .setAuthor(`${message.author.tag}`)
                .setDescription('Vibe motherfucker')
                .setThumbnail('https://media.discordapp.net/attachments/731614861301252107/747862950097977525/a_985713092df32da3a7af0fd605e83e6d.gif')
                .setImage('https://media.discordapp.net/attachments/731614861301252107/747862950097977525/a_985713092df32da3a7af0fd605e83e6d.gif')
                .setTimestamp()
                .setFooter(`${message.author.tag} is Vibin`, `${message.author.displayAvatarURL({dynamic: true, size: 2048})}`);
            message.channel.send(embed);
            message.delete();
        }    
    }



        else if(cmd==='sike') {
            if(!message.author.bot){
                var embed = new Discord.MessageEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle(`Sike!`)
                .setAuthor(`${message.author.tag}`)
                .setDescription('Sike Nigga')
                .setImage('https://cdn.discordapp.com/attachments/757586956229279909/757698277780226160/Mr9g4be_d.png')
                .setTimestamp()
            message.channel.send(embed);
            message.delete();
        }
    }


        else if(cmd==='gay') {
            if(!message.author.bot){
                var embed = new Discord.MessageEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle(`Wassup fag?`)
                .setAuthor(`${message.author.tag}`)
                .setImage('https://cdn.discordapp.com/emojis/743663811105390674.png?v=1')
                .setTimestamp()
                .setFooter(`${message.author.tag} is gay`);
            message.channel.send(embed);
            message.delete();
        }    
        }




        else if(cmd==='nigga') {
            if(!message.author.bot){
                var embed = new Discord.MessageEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle(`My nigga`)
                .setAuthor(`${message.author.tag}`)
                .setImage('https://cdn.discordapp.com/attachments/757586956229279909/757699061309767690/Z.png')
                .setTimestamp()
                .setFooter(`${message.author.tag} is a homie`);
            message.channel.send(embed);
            message.delete();
        }    
        }



////////////////////////////////////////////MineSweeper//////////////////////////////////////////\
        else if (cmd === 'ms') {
            message.delete();
            const rows = parseInt(args[0]);
            const columns = parseInt(args[1]);
            const mines = parseInt(args[2]);
        
            if (!rows) {
            return message.channel.send(':warning: Please provide the number of rows.');
            }
        
            if (!columns) {
            return message.channel.send(':warning: Please provide the number of columns.');
            }
        
            if (!mines) {
            return message.channel.send(':warning: Please provide the number of mines.');
            }
        
            const minesweeper = new Minesweeper({ rows, columns, mines });
            const matrix = minesweeper.start();
        
            // return matrix
            // ? message.channel.send(matrix)
            // : message.channel.send(':warning: You have provided invalid data.');

            var embed = new Discord.MessageEmbed()
            .setTitle("Minesweeper")
            .setDescription(matrix)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setFooter(`For ${message.author.tag}`)
            .setTimestamp();

            return matrix
            ? message.channel.send(embed)
            : message.channel.send(':warning: You have provided invalid data.');
        
        
        
        }



/////////////////////////////////////////Embed/////////////////////////////////////////////////

            else if(cmd==="emb"){
            message.delete();

            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have embed permissions!').then(message => {message.delete({ timeout: 3000 })});
            var embed = new Discord.MessageEmbed()
            .setTitle(args[0])
            .setAuthor(`${message.author.tag}`, `${message.author.avatarURL()}`, 'https://youtu.be/dQw4w9WgXcQ')
            .setDescription(args[1])
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setImage("https://cdn.discordapp.com/emojis/709023813446402069.gif?v=1")
            .addField("By: ", message.author.tag, true)
            .setTimestamp()
            .setFooter(`Sent by ${message.author.tag}`, `${message.author.avatarURL()}`);
            message.channel.send(embed);


        }
//////////////////////////////////////Help/////////////////////////////////////////////////////////

        else if(cmd==="help"){
            message.delete();
            var embed = new Discord.MessageEmbed()
            .setTitle("Help - Bot commands start with ?")
            .setAuthor(`${message.author.tag}`, `https://rb.gy/3ahc0h`, 'https://rb.gy/ysi0eu')
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setThumbnail("https://cdn.discordapp.com/emojis/598681122842476565.gif?v=1")
            .addField("help", "Provides a list of commands, 0 args")
            .addField("ms", "Play a game of minesweeper!, 3 integers with spaces")
            .addField("uptime", "Show bot uptime, 0 args")
            .addField("ping", "Check ping, 0 args")
            .addField("kick", "Kicks the user, mention/id")
            .addField("ban", "Bans the user, mention/id")
            .addField("mute", "Mutes the user, mention/id, duration(10s, 1h, 1d) )")
            .addField("gr", "Gives role, mention/id, (p/s/test)")
            .addField("rr", "Removes the user, mention/id (p/s/test)")
            .addField("purge", "Purges the chat, integer)")
            .addField("pfp", "Sends embedded pfp, mention)")
            .addField("dp", "Sends embedded own pfp, 0 args")
            .addField("vibe", "Vibe!, no args")
            .addField("nos", "NitroGen, no args")
            .addField("8b", "Ask magic 8-ball a yes/no question!, String args")
            .addField("gp", "ghost ping, mention")
            .addField("flip", "Flip a coin!, no args")
            .addField("emb", "Embed, Title, description")
            .addField("req", "Request a crack, file!, String arg")
            .addField("nigga", "You racist piece of shit!, no args")
            .setFooter(`help asked by ${message.author.tag}`)
            .setTimestamp();
            message.channel.send(embed);


        }

        else if(cmd==="uptime"){
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
            message.delete();
            var embed = new Discord.MessageEmbed()
            .setTitle(`Bot uptime is...`)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setDescription(`${uptime}`)
            .setFooter(`${message.author.tag}`);
            message.channel.send(embed);
        }





        else if(cmd==="gp"){
                 console.log(`${message.author.tag} ghost pinged ${message.mentions.members.first().displayName} (${message.mentions.members.first().user.tag})`);
                message.delete();


        }
///////////////////////////////////NitroGen///////////////////////////////////////////////////

        else if(cmd==="nos"){
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have nitro permissions!').then(message => {message.delete({ timeout: 3000 })});
                        message.channel.send("https://discord.gift/"+makeid(16));
                        message.delete();

                function makeid(length) {
                    var result           = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
        }
//////////////////////////////////////////////////////////////////////////////
        else if(cmd === "flip")
                {
                        function doRandHT() {
                    var rand = ['HEADS!','TAILS!'];

                    return rand[Math.floor(Math.random()*rand.length)];
                    }
                    var embed = new Discord.MessageEmbed()
                    .setTitle(`The winner is...`)
                    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                    .setDescription(doRandHT())
                    .setThumbnail("https://cdn.discordapp.com/emojis/711194503838433370.gif?v=1")
                    .setFooter(`${message.author.tag}`)
                    .setTimestamp();
                    message.channel.send(embed);


                }


///////////////////////////////////8-Ball//////////////////////////////
        else if(cmd==="8b")
        {
            if(!args) return message.reply(`Provide a question within quotation marks`).then(message => {message.delete({ timeout: 3000 })});
            function doRandHT() {
                var rand = ["It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes – definitely",
                "You may rely on it",
                "As I see it",
                "yes",
                "Most Likely",
                "Outlook good",
                "Yes",
                "Signs point to yes"];

                return rand[Math.floor(Math.random()*rand.length)];
                }
                var embed = new Discord.MessageEmbed()
                .setTitle(`Magic 8-ball says...`)
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setDescription(doRandHT())
                .setThumbnail("https://discordapp.com/assets/0cfd4882c0646d504900c90166d80cf8.svg")
                .setFooter(`${message.author.tag}`)
                .setTimestamp();
                message.channel.send(embed);




        }




















    
    }
        
});

//////////////////////////Nitro-replier/////////////////////////////////////////////////

client.on('message', (message)=>{
 if(!message.author.bot){
    let codes = message.content.match(regex);
    if(codes){
        let code = message.content;
        code = code.replace(/(discord\.gift\/|discord\.com\/gifts\/|discordapp\.com\/gifts\/)/gim, '').replace(/\W/g, '');
        if(code.length<16||code.length>24){
            message.reply('Sending fake nitros is retarded!').then(message => {message.delete({ timeout: 3000 })});        }
        else {
            message.reply('Is this nitro!?').then(message => {message.delete({ timeout: 3000 })});        }
        }
    }
});
///////////////////////////////////Groovy/////////////////////////////////
// client.on('message', (message)=>{
//     const musicreq = '<#758375631149989898>';
//     const admin = '<#757586956229279909>';
//     if(message.content.startsWith('-')){
//         if(message.channel.id!='758375631149989898'){
//             if(!message.member.hasPermission('ADMINISTRATOR')){
//                 message.delete();
//                 message.reply(`Please type groovy commands in ${musicreq}`).then(message => {message.delete({ timeout: 3000 })});
//             }
//             else if (message.member.hasPermission('ADMINISTRATOR')){
//                 if(message.channel.id!='758375631149989898'||message.channel.id!='757586956229279909'){
//                 message.reply(`Please type groovy commands in ${musicreq} or ${admin}`).then(message => {message.delete({ timeout: 3000 })});
//                 }
//             }

//         }
//     }
// });



client.on('message', (message)=>{
    const musicreq = '<#758375631149989898>';
    const admin = '<#757586956229279909>';
    if(message.content.startsWith('-')){
        if(!message.member.hasPermission('ADMINISTRATOR')){
            if(message.channel.id!='758375631149989898'){
                message.delete();
                message.reply(`Please type groovy commands in ${musicreq}`).then(message => {message.delete({ timeout: 3000 })});
            }
        } else if(message.member.hasPermission('ADMINISTRATOR')){
            if(message.channel.id!='758375631149989898'){
                if(message.channel.id!='757586956229279909'){
                message.delete();
                message.reply(`Please type admin groovy commands in ${musicreq} or ${admin}`).then(message => {message.delete({ timeout: 3000 })});
                }
            }

        }
    }
});






//////////////////////////////////ReactionRoles///////////////////////////////

    client.on('messageReactionAdd', (reaction, user) => {


        const Phaukat = "757326423764500618"
        const { name } = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id);
        if(reaction.message.id=== '757330237439606845'){
            switch (name) {
                case '🍆':
                    member.roles.add(Phaukat);
                    break;
    
            }
    
        }
    });
    
    
    client.on('messageReactionRemove', (reaction, user) => {
        const Phaukat = "757326423764500618"
        const { name } = reaction.emoji;
        const member = reaction.message.guild.members.cache.get(user.id);
        if(reaction.message.id=== '757330237439606845'){
            switch (name) {
                case '🍆':
                    member.roles.remove(Phaukat);
                    break;
    
            }
    
        }
    });

   
client.login(process.env.TOKEN);