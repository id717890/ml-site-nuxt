import {
  SHOW_SIDE_PANEL,
  SET_SIDE_PANEL_PAGE,
  SET_SIDE_PANEL_WIDTH,
} from './types'
// import { SIDE_PANEL_MENU_PAGE } from '~/helpers/constants'

export const state = () => ({
  show: false,
  page: null,
  width: null,
})

export const actions = {}

export const mutations = {
  [SHOW_SIDE_PANEL]: (state, payload) => {
    state.show = payload
  },
  [SET_SIDE_PANEL_PAGE]: (state, payload) => {
    state.page = payload
  },
  [SET_SIDE_PANEL_WIDTH]: (state, payload) => {
    state.width = payload
  },
}

export const getters = {}
