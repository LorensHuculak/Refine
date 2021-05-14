interface state {
    isLoggedIn: boolean;
    oauth_token: string | null;
    oauth_token_secret: string | null;
    screen_name: string | null;
    user_id: string | null;
    name: string | null;
    profile_image_url: string | null;
}
interface authdata {
    oauth_token: string;
    oauth_token_secret: string;
    screen_name: string;
    user_id: string;
}
interface sessiondata {
    name: string;
    profile_image_url: string;
}

export default {
    state: {
        isLoggedIn: false,
        oauth_token: null,
        oauth_token_secret: null,
        screen_name: null,
        user_id: null,
        name: null,
        profile_image_url: null,
    },
    getters: {
        isLoggedIn(state: state) {
            return state.isLoggedIn;
        },
        username(state: state) {
            return state.name || state.screen_name;
        },
        userid(state: state) {
            return state.user_id;
        },
        authToken(state: state) {
            return {
                user_id: state.user_id,
                oauth_token: state.oauth_token,
                oauth_token_secret: state.oauth_token_secret,
            };
        },
        profileImage(state: state) {
            return state.profile_image_url;
        },
    },
    actions: {
        setAuthentication({ commit }: { commit: Function }, authdata: authdata) {
            localStorage.setItem("authentication", JSON.stringify(authdata));
            commit("setAuthentication", authdata);
        },
        setSessionData({ commit }: { commit: Function }, sessiondata: string) {
            commit("setSessionData", sessiondata);
        },
        logout({ commit }: { commit: Function }) {
            commit("logout");
        },
    },
    mutations: {
        setAuthentication(state: state, authdata: authdata) {
            state.oauth_token = authdata.oauth_token;
            state.oauth_token_secret = authdata.oauth_token_secret;
            state.screen_name = authdata.screen_name;
            state.user_id = authdata.user_id;
            state.isLoggedIn = true;
        },
        setSessionData(state: state, sessiondata: sessiondata) {
            state.name = sessiondata.name;
            state.profile_image_url = sessiondata.profile_image_url.replace("_normal", "_bigger");
        },
        logout(state: state) {
            localStorage.removeItem("authentication");
            state.isLoggedIn = false;
            state.oauth_token = null;
            state.oauth_token_secret = null;
            state.screen_name = null;
            state.user_id = null;
            state.name = null;
            state.profile_image_url = null;
        },
    },
};
