import types from './types'

import mockConfig from '~/testcfg'

export const state = () => ({
  config: null,
  configLoading: false,
})

export const actions = {
  [types.GET_APP_CONFIG]: async ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(types.SET_APP_CONFIG_LOADING, true)
      // setTimeout(async () => {
      commit(types.SET_APP_CONFIG, mockConfig)
      commit(types.SET_APP_CONFIG_LOADING, false)
      // console.log('got cfg', mockConfig)
      resolve(mockConfig)
      // }, 200)
    })
  },
}

export const mutations = {
  [types.SET_APP_CONFIG]: (state, payload) => {
    state.config = payload
  },
  [types.SET_APP_CONFIG_LOADING]: (state, payload) => {
    state.configLoading = payload
  },
}

export const getters = {}
