const state = {
    userId: null, // 用户Id
}

const mutations = {
    USER_ID(state,payload) {
        state.userId = payload.userId;
    }
}

export default {
    namespaced: true,
    state,
    mutations
}