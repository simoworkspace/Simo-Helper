const { SlashCommandBuilder, EmbedBuilder, } = require("discord.js");
const translatte = require('translatte');

const database = {
    "functions": Object.values(require('../../functions.json')).flatMap(item => item)
};

const choicess = database.functions.map(a => {
    return { name: a.function, value: a.function };
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aoi')
        .setDescription('Pesquisa uma função na wiki')
        .addStringOption(option =>
            option.setName('input')
                .setRequired(true)
                .setDescription('Digite o nome de alguma função')
        ).addUserOption(option => option.setName('target').setRequired(false).setDescription('Mencione o usuário alvo')),
    run: async (interaction, client) => {
        let argu = interaction.options.getString('input')

        if (!argu.startsWith('$')) argu = '$' + argu;

        if (!argu) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor(0xFFC94D)
                    .setDescription(`:warning: Você precisa digitar o nome de alguma função.`)
            ]
        });

        if (!database.functions.map(a => { return a.function.toLowerCase() }).includes(argu.toLowerCase())) return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor(0xFF0000)
                    .setDescription(`:x: A função \`${argu}\` Não existe, ou não está na wiki.`)
            ]
        })

        try {
            const a = database.functions.filter(a => {
                return a.function.toLowerCase() === argu.toLowerCase();
            })[0];

            const tdescription = await translatte(a.description, { to: 'pt' });
            const description = await tdescription.text.charAt(0).toUpperCase() + tdescription.text.slice(1);

            const user = interaction.options.getUser('user');

            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(0x0099FF)
                        .setTitle(' Detalhes da função')
                        .addFields({ name: `Função`, value: `\`${a.function}\``, inline: true })
                        .addFields({ name: `Uso`, value: `\`${a.usage}\``, inline: true })
                        .addFields({ name: `Versão`, value: `\`${a.version}\``, inline: true })
                        .addFields({ name: `Descrição`, value: `\`${description}\``, inline: false })
                        .addFields({ name: `Exemplo`, value: `\`${a.example}\``, inline: false })
                ],
                content: user ? `${user}` : " "
            });

        } catch (erro) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setDescription(`:x: A função \`${argu}\` não foi encontrada.`)
                ]
            });
        };
    },
};
