import ApiBase from './_ApiBase'

export default {
  createRequest(data) {
    return ApiBase.post('api/lead/LeadCreate', data)
  },
}
