import types from './types'

export const state = () => ({})

export const actions = {
  [types.nuxtServerInit]: async ({ rootState, dispatch, commit }) => {
    const { config } = rootState?.app
    if (!config) {
      await dispatch(`app/${types.GET_APP_CONFIG}`, {}, { root: true })
      // commit(`app/${types.SET_APP_CONFIG_LOADING}`, true, { root: true })
      // setTimeout(async () => {
      // commit(`app/${types.SET_APP_CONFIG}`, result, { root: true })
      // commit(`app/${types.SET_APP_CONFIG_LOADING}`, false, { root: true })
      // console.log('got cfg', mockConfig)
      // console.log(result)
    }
  },
}

export const mutations = {}

export const getters = {}
