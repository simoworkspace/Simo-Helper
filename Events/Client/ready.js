const time = new Date().toLocaleString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
});

module.exports = {
    name: "ready",
    once: true,
    run: async(client) => {
        console.log(`${time} | ${client.user.username} is now online.`);
        setInterval(() => {
            const activities = [
                {
                    name: "/help",
                    type: 0,
                },
            ];
            const customActivities = Math.floor(
                Math.random() * activities.length
            );

            client.user.setActivity(`${activities[customActivities].name}`, {
                type: activities[customActivities].type,
                status: "online",
            });
        }, 100000);
    },
};