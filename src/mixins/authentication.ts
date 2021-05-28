// @ts-nocheck
export default {
    methods: {
        async twitterLogin() {
            const response = await fetch(`${process.env.VUE_APP_BASE_URL}/requesttoken`, {
                mode: "cors",
            });
            const responseJSON = await response.json();
            window.open(responseJSON.redirectURL, "_self");
        },

        async blockUsers() {

            const response = await fetch(`${process.env.VUE_APP_BASE_URL}/blockuser`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    oAuthAccessToken: this.$store.getters.authToken,
                    toBlock: this.items.map((x) => x.decodedData[0]), //TODO
                }),
            });
            const responseJson = await response.json();
            this.subscribed = "Subscribed"
        },

        async getUserInfo() {
            const response = await fetch(`${process.env.VUE_APP_BASE_URL}/userinfo`, {
                mode: "cors",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    oAuthAccessToken: this.$store.getters.authToken,
                }),
            });
            const responseJson = await response.json();

            this.$store.dispatch("setSessionData", responseJson.data);
        },
    },
};
