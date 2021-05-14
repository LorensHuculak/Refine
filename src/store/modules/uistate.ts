interface modalInfo {
    modalName: string;
    open: boolean;
}

interface state {
    modals: {
        [key: string]: boolean;
    };
}

export default {
    state: {
        modals: {
            wallet: false,
            newUser: false,
            challenge: false,
            evidence: false,
            remove: false,
        },
    },
    getters: {
        getModalOpen: (state: state) => (modal: string) => {
            return state.modals[modal];
        },
    },
    actions: {
        setModal({ commit }: { commit: Function }, modalInfo: modalInfo) {
            commit("setModal", modalInfo);
        },
    },
    mutations: {
        setModal(state: state, modalInfo: modalInfo) {
            state.modals[modalInfo.modalName] = modalInfo.open;
        },
    },
};
