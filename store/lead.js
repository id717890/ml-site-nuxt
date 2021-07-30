import types from './types'

export const state = () => ({})

export const actions = {
  async [types.CREATE_REQUEST]({ rootState }, payload) {
    const operator = rootState?.auth?.decodeJwt?.oper
    const partner = rootState?.auth?.decodeJwt?.partner
    const poscode = rootState?.auth?.decodeJwt?.poscode
    const request = {
      ...payload,
      operator,
      partner,
      poscode,
    }
    const { status, data } = await this.$axios.post(
      'api/lead/LeadCreate',
      request
    )
    if (status === 200 && data?.ErrorCode === 0 && !data?.Message) {
      return true
    } else {
      return false
    }
  },
}

export const mutations = {}

export const getters = {}
