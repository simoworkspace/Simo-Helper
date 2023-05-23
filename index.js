const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { AoiClient, LoadCommands } = require('aoi.js');

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

const { token } = require("./config.json");

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
});

const bot = new AoiClient({
    token: token,
    prefix: "-",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
		mobilePlatform: false,
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./databaseAoi/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

bot.variables({
    teste: '',
    teste2: '',
    numteste: 0,
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./AoiCommands/");

client.commands = new Collection();

process.on('uncaughtException', (error) => {
    console.error('uncaughtExceptionError' + error)
}); 

process.on('unhandledRejection', (error) => {
    console.error('unhandledRejectionError' + error)
}); 

client.login(token).then(() => {
    loadEvents(client);
    loadCommands(client);
});