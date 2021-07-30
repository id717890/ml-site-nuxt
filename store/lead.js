import types from './types'

export const state = () => ({})

export const actions = {
  async [types.CREATE_REQUEST]({ rootState }, payload) {
    const operator = rootState?.auth?.decodeJwt?.oper
    const partner = rootState?.auth?.decodeJwt?.partner
    console.log(operator, partner, rootState?.auth?.decodeJwt)
    const direction = 2 // тип продукта (направление), по которому идёт запрос; 1 - значит лояльность
    const type = 4 // 4 - это значит обращение в поддержку
    const request = {
      ...payload,
      operator,
      partner,
      direction,
      type,
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
