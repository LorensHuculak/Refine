//@ts-ignore
import { createStore } from "vuex";
import authentication from "./modules/authentication";
import lists from "./modules/lists";
import uistate from "./modules/uistate";

interface state {
    provider: string | null;
    connected: boolean;
    currentChain: string;
    currentAccount: string | null;
    chainIDs: {
        [key: number]: string;
    };
}

export default createStore({
    state: {
        provider: null,
        connected: false,
        currentChain: null,
        currentAccount: null,

        chainIDs: {
            1: "Mainnet",
            3: "Ropsten",
            4: "Rinkeby",
            5: "Goerli",
            42: "Kovan",
        },
    },
    getters: {
        isProvider(state: state) {
            return state.provider;
        },
        isConnected(state: state) {
            return state.connected;
        },
        currentAccount(state: state) {
            return state.currentAccount;
        },
        currentChain(state: state) {
            return state.chainIDs[parseInt(state.currentChain, 16)];
        },
    },
    actions: {
        setProvider({ commit }: { commit: Function }, providerInjected: string) {
            commit("setProvider", providerInjected);
        },
        setConnected({ commit }: { commit: Function }, isConnected: boolean) {
            commit("setConnected", isConnected);
        },
        setAccount({ commit }: { commit: Function }, newAccount: string) {
            commit("setAccount", newAccount);
        },
        setChain({ commit }: { commit: Function }, newChain: string) {
            commit("setChain", newChain);
        },
    },
    mutations: {
        setProvider(state: state, providerInjected: string) {
            state.provider = providerInjected;
        },
        setConnected(state: state, isConnected: boolean) {
            state.connected = isConnected;
        },
        setAccount(state: state, newAccount: string) {
            state.currentAccount = newAccount;
        },
        setChain(state: state, newChain: string) {
            state.currentChain = newChain;
        },
    },
    modules: { authentication, lists, uistate },
});
