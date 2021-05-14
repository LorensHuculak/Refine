interface list {
    address: string;
}
interface state {
    lists: Array<list>;
}
export default {
    state: {
        lists: [],
    },
    getters: {
        getList: (state: state) => (address: string) => {
            return state.lists.find((list: list) => list.address.toLowerCase() == address.toLowerCase());
        },
        getLists(state: state) {
            return state.lists;
        },
    },
    actions: {
        setLists({ commit }: { commit: Function }, lists: Array<list>) {
            commit("setLists", lists);
        },
    },
    mutations: {
        setLists(state: state, lists: Array<list>) {
            state.lists = lists;
        },
    },
};
