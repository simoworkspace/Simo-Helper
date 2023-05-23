module.exports = {
    name: "interactionCreate",
    run: async (interaction, client) => {
        const command = client.commands.get(interaction.commandName);
        
        if (!command) return;
        if (interaction.isAutocomplete() && command.autocomplete) {
            await command.autocomplete(interaction);

            return;
        };
        
        if (interaction.isChatInputCommand()) {
            await command.run(interaction, client);
            
            return;
        };
    }
}; // salva e testa

/*
TypeError: command.run is not a function
    at Object.run (/home/spyei/Área de Trabalho/botescowrapper/Events/interactions/interactionCreate.js:14:27)

*/

// sla então
// esse erro aí pode ser outra coisa, porque o comando nem roda (o comando normal, não o autocompletar)
// olha, quando começa a autocompletar ele da erro, quando eu executo o /ping funciona normal
// mesmo erro :sob:

// é inútil pedir ajuda lá, quando eu usava autocomplete, eu pedi ajuda lá e todas as vezes eles falaram para ler o guia
// pede ajuda lá, vou pinar 

//

// ai é foda, vamo pedir ajuda no djs v15 :skull: