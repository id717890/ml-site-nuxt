import jwtDecode from 'jwt-decode'
import appconfig from '@/appconfig.json'
import types from './types'

export const state = () => ({
  accessToken: null,
  refreshToken: null,
  decodeJwt: null,
})

export const actions = {
  async [types.AUTH_JWT_ACTION]({ commit }) {
    if (!appconfig) throw new Error('AppConfig.json IS NOT defined')
    const { jwtu, jwtp } = appconfig
    if (!jwtu || !jwtp) throw new Error('JWT user or password IS NOT defined')
    const request = new URLSearchParams()
    request.append('username', jwtu)
    request.append('password', jwtp)
    request.append('grant_type', 'password')
    const { status, data } = await this.$axios.post('managerLogin', request)
    if (status === 200 && data?.access_token && data?.refresh_token) {
      commit(types.SET_ACCESS_TOKEN, data?.access_token)
      commit(types.SET_REFRESH_TOKEN, data?.refresh_token)
    }
  },
}

export const mutations = {
  [types.SET_ACCESS_TOKEN]: (state, payload) => {
    state.accessToken = payload
    if (payload) {
      state.decodeJwt = jwtDecode(payload)
    }
  },
  [types.SET_REFRESH_TOKEN]: (state, payload) => {
    state.refreshToken = payload
  },
  [types.SET_DECODE_JWT]: (state, payload) => {
    state.decodeJwt = payload
  },
}

export const getters = {}
