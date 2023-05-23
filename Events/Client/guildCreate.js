module.exports = {
    name: "guildCreate",
    run: async(guild) => {
        const { members, channels } = guild;
        let channelToSend;
        
        channels.cache.forEach((channel) => {
            if (
                channel.type === 0 &&
                !channelToSend &&
                channel.permissionsFor(members.me).has("SendMessages")
            )
                channelToSend = channel;
        });
        if (!channelToSend) return;
    },
};
