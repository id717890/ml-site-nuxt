import { SHOW_SIDE_PANEL } from './types'

export const state = () => ({
  show: false,
})

export const actions = {}

export const mutations = {
  [SHOW_SIDE_PANEL]: (state, payload) => {
    state.show = payload
  },
}

export const getters = {}
