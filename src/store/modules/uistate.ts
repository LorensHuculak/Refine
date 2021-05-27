interface modalInfo {
    modalName: string;
    open: boolean;
}

interface state {
    useBlockiesIcon: boolean;
    modals: {
        [key: string]: boolean;
    };
}

export default {
    state: {
        useBlockiesIcon: true,
        modals: {
            wallet: false,
            newUser: false,
            challenge: false,
            evidence: false,
            remove: false,
            auth: false,
        },
    },
    getters: {
        getBlockiesIcon(state: state) {
            return state.useBlockiesIcon;
        },
        getModalOpen: (state: state) => (modal: string) => {
            return state.modals[modal];
        },
    },
    actions: {
        setBlockiesIcon({ commit }: { commit: Function }, active: boolean) {
            commit("setBlockiesIcon", active);
        },
        setModal({ commit }: { commit: Function }, modalInfo: modalInfo) {
            commit("setModal", modalInfo);
        },
    },
    mutations: {
        setBlockiesIcon(state: state, active: boolean) {
            state.useBlockiesIcon = active;
        },
        setModal(state: state, modalInfo: modalInfo) {
            state.modals[modalInfo.modalName] = modalInfo.open;
        },
    },
};
