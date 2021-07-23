import types from './types'
import LeadService from '~/api/LeadService'

export const state = () => ({})

export const actions = {
  [types.CREATE_REQUEST]: async ({ rootState }, payload) => {
    const { oper: operator, partner } = rootState?.auth?.decodeJwt
    const direction = 2 // тип продукта (направление), по которому идёт запрос; 1 - значит лояльность
    const type = 4 // 4 - это значит обращение в поддержку
    const request = {
      ...payload,
      operator,
      partner,
      direction,
      type,
    }
    const { status, data } = await LeadService.createRequest(request)
    if (status === 200 && data?.ErrorCode === 0 && !data?.Message) {
      return true
    } else {
      return false
    }
  },
}

export const mutations = {}

export const getters = {}