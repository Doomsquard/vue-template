import reactions from '../mocks/reactions'

const loadData = (timer) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(reactions)
		}, timer)
	})
}

export default {
	namespaced: true,
	state: {
		reactions: [],
	},
	getters: {
		getState(state) {
			return state.reactions
		},
	},
	mutations: {
		SET_REACTIONS(state, payload) {
			state.reactions = payload
		},
	},
	actions: {
		async loadDataAction({ commit }, payload) {
			try {
				const data = await loadData(payload)
				commit('SET_REACTIONS', data)
			} catch (e) {
				console.log(e)
			}
		},
	},
}
