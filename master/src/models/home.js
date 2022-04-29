

const HomeModel = {
    namespace: "home",
    state: {
        loginUser: [
            {
                name: '233',
                password: '233'
            }
        ],
        isMicroApp: false
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {
    },
    subscriptions: {
    }
};

export default HomeModel;