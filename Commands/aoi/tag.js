const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tag')
        .setDescription('Procura por alguma tag.')
        .addStringOption(option =>
            option.setName('tag')
                .addChoices(
                    { name: 'Caracter Escaping', value: 'escape' },
                    { name: 'Parser', value: 'parser' }
                )
                .setRequired(true)
                .setDescription('Escolha uma das opções')
        ),
    run: async (interaction, client) => {
        const argu = interaction.options.getString('tag');
        switch (argu) {
            case 'escape':
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .addFields({ name: 'Character', value: '[\n]\n;\n:\n$\n<\n>\n=\n{\n}\n,\n&&\n\|\|', inline: true })
                            .addFields({ name: 'Escaped', value: '#RIGHT#\n#LEFT#\n#SEMI#\n#COLON#\n#CHAR#\n#RIGHT_CLICK#\n#LEFT_CLICK#\n#EQUAL#\n#RIGHT_BRACKET#\n#LEFT_BRACKET#\n#COMMA#\n#AND#\n#OR#', inline: true })
                            .setColor(0x0099FF)
                            .setTitle('Caracteres de Escape')
                    ]
                });
                break;
            case 'parser':
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle('Aoi.js Parser')
                            .setColor(0x0099FF)
                            .addFields({ name: 'Embed Parser', value: '\`\`\`php\n{title:text}\n{description:text}\n{color:...}\n{footer:text:icon?}\n{image:URL}\n{thumbnail:URL}\n{author:name:icon?}\n{authorURL:URL}\n{field:title:value:inline? (true / false)}\n{timestamp:ms?}\`\`\`' })
                            .addFields({ name: 'Button Parser', value: '\`\`\`php\n{button:label:style:customID:disabled? (true / false):emoji?}\`\`\`' })
                            .addFields({ name: 'SelectMenu Parser', value: '\`\`\`php\n{selectMenu:customID:placeholder:minValue:maxValue:default(true / false):...options}\n{selectMenuOptions:optionName:customID:optionDescription:default? (true / false):emoji?}\n\`\`\`' })
                            .addFields({ name: 'InteractionModal Parser', value: '\`\`\`php\n{textInput:label:style:customID:required? (true / false):placeholder?:minLength?:maxLength?:defaultValue?}\`\`\`' })
                    ]
                });
                break;
        }
    }
};