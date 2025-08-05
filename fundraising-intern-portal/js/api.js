const CONFIG = {
    STORAGE_KEYS: {
        USER: 'intern_user'
    }
};

class API {
    // Simulated backend data
    static async getInternData(email) {
        const dummy = {
            name: "Sowmithra",
            email,
            totalRaised: 1825,
            goal: 5000,
            rewards: 2,
            rank: 12
        };
        return new Promise(res => setTimeout(() => res(dummy), 500));
    }

    static async getLeaderboard() {
        return [
            { name: "Alex Chen", amount: 5890, progress: "118%", badge: "🥇" },
            { name: "Sarah Johnson", amount: 4250, progress: "85%", badge: "🥈" },
            { name: "Mike Rodriguez", amount: 3675, progress: "73%", badge: "🥉" },
            { name: "Sowmithra", amount: 1825, progress: "36%", badge: "🏅" },
            { name: "Aanya Patel", amount: 1050, progress: "21%", badge: "🎖️" }
        ];
    }
}
