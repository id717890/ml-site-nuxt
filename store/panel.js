import { SHOW_SIDE_PANEL, SET_SIDE_PANEL_PAGE } from './types'
// import { SIDE_PANEL_MENU_PAGE } from '~/helpers/constants'

export const state = () => ({
  show: false,
  page: null,
})

export const actions = {}

export const mutations = {
  [SHOW_SIDE_PANEL]: (state, payload) => {
    state.show = payload
  },
  [SET_SIDE_PANEL_PAGE]: (state, payload) => {
    state.page = payload
  },
}

export const getters = {}
