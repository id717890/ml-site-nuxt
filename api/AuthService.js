import ApiBase from './_ApiBase'

export default {
  getJwt(data) {
    return ApiBase.post('managerLogin', data)
  },
}
